"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./BackButton";
import { Header } from "./Header";
import { Social } from "./Social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonLink: string;
    showSocial?: boolean;
    isRegister?: boolean;
    subLabel?: string;
}

export const CardWrapper = ({ 
    children, 
    headerLabel, 
    backButtonLabel, 
    backButtonLink, 
    showSocial,
    subLabel,
 }: CardWrapperProps) => {
    return (
        <Card className="-mt-16 sm:w-[65%] w-[90%] md:w-[50%] lg:w-[30%]  shadow-md">
            <CardHeader>
                <Header label={headerLabel} subLabel={subLabel }/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social/>
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonLink}
                />
            </CardFooter>
        </Card>
    )
}