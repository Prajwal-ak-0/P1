"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Page = () => {
    const user = useCurrentUser();

    const onClick = () => {
        signOut();
    }

    return (
        <div>
            
        </div>
    )
}

export default Page;