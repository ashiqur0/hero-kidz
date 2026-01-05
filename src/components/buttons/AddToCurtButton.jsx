'use client'

import { usePathname, useRouter } from "next/navigation";

const AddToCurtButton = ({ product }) => {

    const isLoggedIn = false;
    const router = useRouter();
    const path = usePathname();

    const add2Cart = () => {
        if (isLoggedIn) alert(product._id);
        else router.push(`/login?callbackUrl=${path}`);
    }

    return (
        <button onClick={add2Cart} className="btn btn-primary mt-4 w-full md:w-auto">
            Add To Cart
        </button>
    );
};

export default AddToCurtButton;