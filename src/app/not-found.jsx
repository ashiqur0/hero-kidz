import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <BiSolidErrorAlt size={100}  className="text-primary"/>
            <h1 className="text-4xl font-semibold mt-10">Page not found</h1>
            <Link href={'/'} className="btn btn-soft btn-primary border border-red-500 mt-5">Go Home</Link>
        </div>
    );
};

export default Error404;