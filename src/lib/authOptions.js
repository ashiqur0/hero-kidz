import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {

        const payload = {
          ...user,
          provider: account.provider,
          providerId: account.providerAccountId,
          role: 'user',
          createdAt: new Date().toISOString(),
        }

        if (!user?.email) {
          return false;
        }

        const isExists = await dbConnect(collections.USERS).findOne({
          email: user.email
        });

        if (!isExists) {
          const result = await dbConnect(collections.USERS).insertOne(payload);
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //     return baseUrl
    // },
    async session({ session, user, token }) {
      if (token) {
        session.role = token.role;
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token
    }
  }
}