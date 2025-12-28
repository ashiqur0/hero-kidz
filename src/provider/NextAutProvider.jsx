'use client'

import { SessionProvider } from "next-auth/react";

const NextAutProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default NextAutProvider;