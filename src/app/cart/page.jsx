import { getCart } from '@/actions/server/cart';
import Cart from '@/components/cart/Cart';
import React from 'react';

const CartPage = async () => {

    const cartItems = await getCart();
    const formattedCartItems = cartItems.map((item) => ({
        ...item,
        _id: item._id.toString(),
        productId: item.productId.toString()
    }));

    return <div>
        {/* title */}
        <div className=''>
            <h2 className='text-4xl py-4 font-bold border-l-8 border-primary pl-8'>
                My Cart
            </h2>
        </div>

        <Cart formattedItems={formattedCartItems}></Cart>
    </div>
};

export default CartPage;