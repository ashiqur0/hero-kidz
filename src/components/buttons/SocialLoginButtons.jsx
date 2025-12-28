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

            {/* GitHub */}
            <button className="btn hover:bg-black hover:text-white btn-soft border border-black w-full mt-3 flex items-center gap-2">
                <FaGithub size={24} />
                Login with GitHub
            </button>
        </div>
    );
};

export default SocialLoginButtons;