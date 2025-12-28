import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLoginButtons = () => {
    return (
        <div className="w-full">
            {/* Google Login */}
            <button className="btn btn-secondary border border-red-500 w-full flex items-center gap-2">
                <FcGoogle size={24} />
                <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLoginButtons;