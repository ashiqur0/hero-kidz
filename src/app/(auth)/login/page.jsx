import SocialLoginButtons from '@/components/buttons/SocialLoginButtons';

const Login = () => {

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Login</h1>
                    <SocialLoginButtons />
                </div>
            </div>
        </div>
    );
};

export default Login;