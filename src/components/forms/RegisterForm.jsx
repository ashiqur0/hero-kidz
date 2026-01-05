'use client'

import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const RegisterForm = () => {

    const router = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { name, email, password };

        const result = await postUser(user);
        if (result.acknowledged) {

            const result = await signIn('credentials', {
            email, password,
            callbackUrl: callbackUrl
        });
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">

                <label className="label">Full Name</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Your name"
                    name="name"
                    required
                />

                <label className="label">Email</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name='email'
                    required
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name='password'
                    required
                />

                <button type="submit" className="btn btn-soft btn-primary border border-red-500 mt-4">Sign up</button>
                <Link href={'/login'}>Already have an account? <span className='text-blue-500 mt-2'>login</span></Link>
            </fieldset>
        </form>
    );
};

export default RegisterForm;