'use client'

import { useMemo, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ formattedItems = [] }) => {

    const [items, setItems] = useState(formattedItems);
    const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
    const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.quantity * item.price, 0), [items]);

    const removeItem = (id) => {
        setItems(items.filter(item => item._id !== id));
    }

    const updateQuantity = (id, q) => {
        setItems(items.map(item => item._id == id ? { ...item, quantity: q } : item));
    }

    return (
        <div>
            <p className="py-3">
                <span className="text-primary font-bold">{items.length}</span> Items Found in the Cart
            </p>

            <div className="flex gap-6">
                {/* Cart Items */}
                <div className="flex-\[3]\">
                    {items.map(item => (
                        <CartItem
                            key={item._id.toString()}
                            item={item}
                            onRemove={removeItem}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                </div>

                {/* Summary Card */}
                <div className="flex-1 border rounded-lg p-4 shadow-md h-fit">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                    <div className="space-y-3 text-sm">
                        {items.map(item => (
                            <div
                                key={item._id}
                                className="flex justify-between border-b pb-2"
                            >
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-gray-500">
                                        Qty: {item.quantity} × ৳{item.price}
                                    </p>
                                </div>
                                <p className="font-semibold">
                                    ৳{item.quantity * item.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 border-t pt-3">
                        <div className="flex justify-between">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mt-1">
                            <span>Total Price</span>
                            <span>৳{totalPrice}</span>
                        </div>
                    </div>

                    <button
                        className="mt-4 w-full bg-primary text-white py-2 rounded hover:opacity-90"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;