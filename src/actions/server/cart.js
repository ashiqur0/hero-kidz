'use server'

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { cache } from "react";

const { collections, dbConnect } = require("@/lib/dbConnect");
const cartCollection = dbConnect(collections.CART);

export const handleCart = async (productId) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) {
        return { success: false };
    }

    // getCartItem-> user.email && productId
    const query = { email: user?.email, productId };
    const isAdded = await cartCollection.findOne(query);

    // if Exist: update cart
    if (isAdded) {
        const updatedData = {
            $inc: {
                quantity: inc ? 1 : -1
            }
        }
        const result = await cartCollection.updateOne(query, updatedData);
        return { success: Boolean(result.modifiedCount) };
    } else {

        const product = await dbConnect(collections.PRODUCTS).findOne({ _id: new ObjectId(productId) });

        // Not Exist: insert cart
        const newData = {
            productId: product._id,
            username: user?.name,
            email: user?.email,
            title: product.title,
            quantity: 1,
            image: product.image,
            price: product.price - (product.price * product.discount) / 100,
        }

        const result = await cartCollection.insertOne(newData);
        return { success: result.acknowledged };
    }
}

export const getCart = cache(async () => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return [];

    const query = { email: user?.email };
    const result = await cartCollection.find(query).toArray();
    return result;
})

export const deleteCartItem = async (id) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false };

    const query = { _id: new ObjectId(id) };
    const result = await cartCollection.deleteOne(query);

    return { success: Boolean(result?.deletedCount) };
}

export const increaseItemDb = async (id, quantity) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false };

    if (quantity > 10) {
        return { success: false, message: 'You can not buy more than 10 products at a time' };
    }

    const query = { _id: new ObjectId(id) };
    const updatedData = {
        $inc: {
            quantity: 1
        }
    }
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
}

export const decreaseItemDb = async (id, quantity) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false };

    if (quantity <= 1) {
        return { success: false, message: 'You can not buy less than 1 product' };
    }

    const query = { _id: new ObjectId(id) };
    const updatedData = {
        $inc: {
            quantity: -1
        }
    }
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
}

export const clearCart = async () => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false };

    const query = { email: user?.email };
    const result = await cartCollection.deleteMany(query);
    return result;
}