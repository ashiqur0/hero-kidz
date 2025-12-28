'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { signIn } from "next-auth/react"

const Login = () => {

    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const result = await signIn('credentials', { redirect: false, email, password });
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

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
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button type='submit' className="btn btn-soft btn-primary border border-red-500 mt-4">Login</button>

                            <Link href={`/signup?callbackUrl=${callbackUrl}`}>Do not have an account? <span className='text-blue-500 mt-2'>sign up</span></Link>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;