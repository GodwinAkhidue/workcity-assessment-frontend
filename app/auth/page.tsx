"use client"
import { createRef, useEffect } from "react";
import Login from "./login";
import Signup from "./signup";
import { useSearchParams } from "next/navigation";

export default function Auth_Page() {

    const searchParams = useSearchParams();
    const t = searchParams.get("t");
    const pageRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (t == "login") {
            pageRef.current?.scrollBy({
                left: -99999,
                behavior: 'smooth'
            })
        } else {
            pageRef.current?.scrollBy({
                left: 99999,
                behavior: 'smooth'
            })
        }
    }, [t]
    )

    return (
        <div ref={pageRef} className="w-full overflow-hidden">
            <div className="w-max flex items-center">
                <Login />
                <Signup />
            </div>
        </div>
    );
}