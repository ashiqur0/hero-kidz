'use client'

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Register = () => {
    const router = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl');

    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { name, email, password };

        const result = await postUser(user);
        if (result.acknowledged) {
            alert('success register');
            router.push(`${callbackUrl}`);
        }
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Sign up</h1>
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
                </div>
            </div>
        </div>
    );
};

export default Register;