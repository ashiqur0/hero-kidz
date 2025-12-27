'use client'

import Link from 'next/link';
import { CgDetailsMore } from 'react-icons/cg';

const ViewDetails = () => {
    return (
        <Link href={`/products/${product._id}`} className="btn btn-primary btn-sm w-full flex items-center gap-2">
            <CgDetailsMore />
            View Details
        </Link>
    );
};

export default ViewDetails;