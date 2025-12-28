import { FcGoogle } from "react-icons/fc";

const SocialLoginButtons = () => {
    return (
        <div>
            {/* Google Login */}
            <button className="btn bg-white text-black border-[#e5e5e5] flex items-center gap-2">
                <FcGoogle size={24} />
                <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLoginButtons;