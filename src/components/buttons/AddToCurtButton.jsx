'use client'

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const AddToCurt = ({ product }) => {

    const router = useRouter();
    const path = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();
    const isLoggedIn = session?.status === 'authenticated';
    console.log('session status: ', isLoggedIn);

    const add2Cart = async () => {
        if (isLoggedIn) {
            setIsLoading(true);
            const result = await handleCart({ product, inc: true });
            if (result?.success) {
                Swal.fire('Added to cart', product?.title, 'success');
            } else {
                Swal.fire('Opps', 'Failed add to cart', 'error');
            }
            setIsLoading(false);
        } else {
            router.push(`/login?callbackUrl=${path}`);
        }
    }

    return (
        <button
            onClick={add2Cart}
            disabled={session?.status == 'loading' || isLoading}
            className="btn btn-primary mt-4 w-full md:w-auto">
            Add To Cart
        </button>
    );
};

export default AddToCurt;