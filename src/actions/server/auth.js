'use server'

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export const postUser = async (payload) => {
    const { email, password, name } = payload;

    // 1. check payload
    if (!email || !password) return null;

    // 2. check user
    const isExists = await dbConnect(collections.USERS).findOne({ email });
    if (isExists) return null;

    // 3. create user
    const newUser = {
        provider: 'credentials',
        name,
        email,
        password: await bcrypt.hash(password, 14),
        role: 'users',
        createdAt: new Date().toISOString()
    };

    // 4. insert user
    const result = await dbConnect(collections.USERS).insertOne(newUser);
    if (result.acknowledged) {
        return {
            ...result,
            insertedId: result.insertedId.toString()
        }
    }
} 