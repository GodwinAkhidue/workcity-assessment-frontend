"use client"
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/authContext";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
    const { user, setUser } = useUser();

    return (
        <div className="bg-white w-full shadow-md flex items-center justify-between p-[20px] lg:p-[30px]">
            <Link href={"/"}>
                <Image src={"/logo_black.png"} alt="workcity" width={999} height={999} className="w-[145px] lg:w-[175px]" />
            </Link>
            <div className="">
                {
                    user ?
                        <div className="text-[24px]">
                            <FaRegCircleUser />
                        </div> :
                        <Link
                            href={"/auth?t=login"}
                            className="bg-black border-2 border-black hover:bg-white hover:text-black transition-all duration-300 cursor-pointer poppins text-white font-semibold px-[25px] lg:px-[30px] lg:py-[10px] py-[7px] text-[14px] rounded-[5px]"
                        >
                            LOGIN
                        </Link>
                }
            </div>
        </div>
    );
}