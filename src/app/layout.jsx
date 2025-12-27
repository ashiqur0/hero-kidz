import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from 'next/font/local'

// initialize font
const poppins = Poppins(
  {
    weight: ['100', '200', '400', '500', '600', '800'],
  }
);

// meta data for SEO
export const metadata = {
  metadataBase: new URL("https://hero-kidz-by-ashiqur.vercel.app/"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz is a modern web application providing reliable products, smooth user experience, and secure online services.",

  applicationName: "Hero Kidz",
  keywords: [
    "Hero Kidz",
    "e-commerce",
    "online shopping",
    "modern web app",
    "react application",
    "nextjs project",
  ],

  authors: [{ name: "Ashiqur Rahman" }],
  creator: "Ashiqur Rahman",
  publisher: "Hero Kidz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/gLcj8NJJ/image.png",
    apple: "https://i.ibb.co.com/gLcj8NJJ/image.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz-by-ashiqur.vercel.app/",
    siteName: "Hero Kidz",
    title: "Hero Kidz – Smart & Reliable Online Shopping",
    description:
      "Explore quality products and seamless experience with Hero Kidz.",
    images: [
      {
        url: "https://i.ibb.co.com/5hSp92xP/Home-Page-Preview.png",
        width: 1200,
        height: 630,
        alt: "Home Page Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz – Smart & Reliable Online Shopping",
    description:
      "Explore quality products and seamless experience with Hero Kidz.",
    images: ["https://i.ibb.co.com/5hSp92xP/Home-Page-Preview.png"],
    creator: "@Ashiqur51218501",
  },

  // themeColor: "#0f172a",
};

// local font 
export const fontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
  // weight: ""
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          <Navbar />
        </header>

        <main className="py-2 md:w-7xl mx-auto min-h-[calc(100vh-287px)]">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
