'use server'

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { sendEmail } from "@/lib/sendEmail";
import { orderInvoiceTemplate } from "@/lib/orderInvoice";

const { dbConnect, collections } = require("@/lib/dbConnect")
const ordersCollection = dbConnect(collections.ORDERS);

export const createOrder = async (payload) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false };

    const cart = await getCart();
    if (cart.length === 0) return { success: false };

    const newOrder = {
        createdAt: new Date().toISOString(),
        items: cart,
        ...payload
    }
    const result = await ordersCollection.insertOne(newOrder);

    if (Boolean(result.insertedId)) {
        const result = await clearCart();
    }

    // Send order invoice email to user
    await sendEmail({
        to: user.email,
        subject: "Your Order Invoice - Hero Kidz",
        html: orderInvoiceTemplate({
            user,
            orderId: result.insertedId.toString(),
            items: cart,
        })
    });

    return { ...result, insertedId: result.insertedId.toString() };
}