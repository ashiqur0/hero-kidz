import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <BiSolidErrorAlt size={140} />
            <h1 className="md:text-6xl text-4xl font-semibold mt-10">Page not found</h1>
        </div>
    );
};

export default Error404;