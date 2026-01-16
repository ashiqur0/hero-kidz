import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    const { title, image, quantity, price } = item;

    return (
        <div className="card card-side bg-base-100 shadow-md p-4 items-center gap-4">
            {/* Product Image */}
            <figure className="relative w-24 h-24">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                />
            </figure>

            {/* Product Info */}
            <div className="flex-1">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="text-sm text-gray-500">
                    Price: ৳{price}
                </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
                <button
                    className="btn btn-sm btn-outline"
                    onClick={onDecrease}
                    disabled={quantity <= 1}
                >
                    <FaMinus />
                </button>

                <span className="font-medium">{quantity}</span>

                <button
                    className="btn btn-sm btn-outline"
                    onClick={onIncrease}
                >
                    <FaPlus />
                </button>
            </div>

            {/* Remove Button */}
            <button
                className="btn btn-sm btn-error text-white ml-4"
                onClick={onRemove}
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;