'use client'
import Link from 'next/link';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Login</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-soft btn-primary border border-red-500 mt-4">Login</button>
                        <Link href={'/signup'}>Do not have an account? <span className='text-blue-500 mt-2'>sign up</span></Link>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;