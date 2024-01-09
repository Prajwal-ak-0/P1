"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getUserById } from "@/lib/getUser";
import { SettingsSchema } from "@/schemas";
import { error } from "console";
import * as z from "zod";

export const settings =async (
    values:z.infer<typeof SettingsSchema>
) => {
    const user = await currentUser();

    if(!user){
        return {
            error:"Unauthorized"
        }
    }

    const dbUser = await getUserById(user.id);

    if(!dbUser){
        return {
            error:"Unauthorized"
        }
    }

    await db.user.update({
        where:{
            id:user.id
        },
        data:{
            ...values
        }
    });

    return {success:"Settings updated"}
}