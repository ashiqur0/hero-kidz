'use client'

import { decreaseItemDb, deleteCartItem, increaseItemDb } from "@/actions/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, updateQuantity, onRemove }) => {
    const { _id, title, image, quantity, price } = item;
    const [loading, setLoading] = useState(false);

    const handleDeleteCartItem = async () => {
        setLoading(true);
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
        setLoading(false);
    }

    const handleIncreaseQuantity = async () => {
        setLoading(true);
        const result = await increaseItemDb(_id, quantity);
        if (result?.success) {
            Swal.fire('success', "Quantity Increase", "success");
            updateQuantity(_id, quantity + 1);
        }
        setLoading(false);
    }

    const handleDecreaseQuantity = async () => {
        setLoading(true);
        const result = await decreaseItemDb(_id, quantity);
        if (result?.success) {
            Swal.fire('success', "Quantity Decrease", "success");
            updateQuantity(_id, quantity - 1);
        }
        setLoading(false);
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
                    disabled={quantity <= 1 || loading}
                >
                    <FaMinus />
                </button>

                <span className="font-medium">{quantity}</span>

                <button
                    className="btn btn-sm btn-outline"
                    disabled={quantity >= 10 || loading}
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