'use server'

import { collections, dbConnect } from "@/lib/dbConnect"

export const getProducts = async () => {
    const products = await dbConnect(collections.PRODUCTS).find().toArray();
    return products;
}