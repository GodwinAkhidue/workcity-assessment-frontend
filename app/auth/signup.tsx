"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { server_url } from "@/lib/constants";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/authContext";

export default function Signup() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    const router = useRouter();
    const { setUser } = useUser();

    async function Signup() {
        if (password !== confirmPassword) {
            return toast.warn("Password and Confirm Password must be the same");
        }

        setIsSigningUp(true);

        await axios.post(`${server_url}/api/signup`, {
            firstname,
            lastname,
            email,
            password
        }, { withCredentials: true })
            .then((res) => {
                setIsSigningUp(false);
                if (res.data.success !== true) {
                    return toast.warn(res.data.message)
                }
                setUser(res.data.user);
                router.push("/clients")
                return toast.success("Signup Successful")
            })
            .catch(() => {
                setIsSigningUp(false);
                return toast.error("Could not connect to server")
            })
    }

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center px-[20px] open-sans">
            <div className="poppins font-bold text-[24px]">
                SIGNUP
            </div>
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
                onClick={() => Signup()}
                className={
                    `mt-[30px] lg:mt-[40px] cursor-pointer w-full max-w-[400px] border-2 
                        ${isSigningUp ? "bg-gray-500 border-gray-500" : "bg-black border-black hover:bg-white hover:text-black text-white"} 
                        transition-all duration-300 rounded-[5px] flex items-center justify-center poppins font-semibold py-[10px]`
                }
            >
                {
                    isSigningUp ? <AiOutlineLoading className="animate-spin" /> : "REGISTER"
                }
            </div>
            <div className="flex w-full max-w-[400px] justify-center gap-[10px] mt-[10px]">
                <div>Already have an account?</div>
                <Link href={'/auth?t=login'} className="font-bold hover:underline">
                    Login
                </Link>
            </div>
        </div>
    );
}