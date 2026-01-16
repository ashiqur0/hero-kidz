'use client'

import { decreaseItemDb, deleteCartItem, increaseItemDb } from "@/actions/server/cart";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, updateQuantity, onRemove }) => {
    const { _id, title, image, quantity, price } = item;

    const handleDeleteCartItem = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteCartItem(_id);
                if (result?.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    onRemove(_id);
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: "Something went wrong",
                        icon: "error"
                    });
                }
            }
        });
    }

    const handleIncreaseQuantity = async() => {
        const result = await increaseItemDb(_id, quantity);
        if (result?.success) {
            Swal.fire('success', "Quantity Updated Successfully", "success");
            updateQuantity(_id, quantity + 1);
        }
    }

    const handleDecreaseQuantity = async() => {
        const result = await decreaseItemDb(_id, quantity);
        if (result?.success) {
            Swal.fire('success', "Quantity Updated Successfully", "success");
            updateQuantity(_id, quantity - 1);
        }
    }

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
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                >
                    <FaMinus />
                </button>

                <span className="font-medium">{quantity}</span>

                <button
                    className="btn btn-sm btn-outline"
                    onClick={handleIncreaseQuantity}
                >
                    <FaPlus />
                </button>
            </div>

            {/* Remove Button */}
            <button
                className="btn btn-sm btn-error text-white ml-4"
                onClick={handleDeleteCartItem}
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;