'use client'

import { useMemo } from "react";

const CheckOut = ({ cartItems = [] }) => {

    const totalItems = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    const totalPrice = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
        [cartItems]
    );

    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="flex gap-8">
                
                {/* Left: Checkout Form */}
                <div className="flex-3 p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-6">Checkout Information</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Shipping Address
                            </label>
                            <textarea
                                rows="2"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                placeholder="Enter your address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Special Instruction
                            </label>
                            <textarea
                                rows="2"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                placeholder="Enter your address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-primary text-white px-6 py-2 rounded hover:opacity-90"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                {/* Right: Order Summary */}
                <div className="sticky top-6 flex-1 p-4 shadow-md h-fit">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                    <div className="space-y-3 text-sm">
                        {cartItems.map(item => (
                            <div
                                key={item._id}
                                className="flex justify-between border-b pb-2"
                            >
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-gray-500">
                                        Qty: {item.quantity} × {item.price}
                                    </p>
                                </div>
                                <p className="font-semibold">
                                    {item.quantity * item.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-3">
                        <div className="flex justify-between text-[14px]">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-1">
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOut;