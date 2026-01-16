'use client'

import { useMemo, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ formattedItems = [] }) => {

    const [items, setItems] = useState(formattedItems);
    const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

    const removeItem = (id) => {
        setItems(items.filter(item => item._id !== id));
    }

    return (
        <div>
            <p className='py-3'>
                <span className='text-primary font-bold'>{items.length}</span> Items Found in the Cart
            </p>

            <div className='flex'>
                <div className='flex-3'>
                    {
                        items.map(item => <CartItem key={item._id.toString()} item={item} onRemove={removeItem}></CartItem>)
                    }
                </div>
                <div className='flex-1'>{totalItems}</div>
            </div>
        </div>
    );
};

export default Cart;