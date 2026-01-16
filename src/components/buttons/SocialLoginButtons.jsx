'use client'

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const SocialLoginButtons = () => {

    const params = useSearchParams();

    const handleGoogleSignIn = async () => {
        const result = await signIn('google', { 
            callbackUrl: params.get('callbackUrl') || '/' 
        });
    }

    return (
        <div className="w-full">
            {/* Google Login */}
            <button onClick={handleGoogleSignIn}
                className="btn btn-secondary border border-red-500 w-full flex items-center gap-2">
                <FcGoogle size={24} />
                <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLoginButtons;