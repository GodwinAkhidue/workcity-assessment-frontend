import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { server_url } from "@/lib/constants";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const router = useRouter();

    async function Login() {

        setIsLoggingIn(true);

        await axios.post(`${server_url}/api/login`, {
            email,
            password
        }, { withCredentials: true })
            .then((res) => {
                setIsLoggingIn(false);
                if (res.data.success !== true) {
                    return toast.warn(res.data.message)
                }
                router.push("/clients")
                return toast.success("Login Success")
            })
            .catch(() => {
                setIsLoggingIn(false);
                return toast.error("Could not connect to server")
            })
    }

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center px-[20px] open-sans">
            <div className="poppins font-bold text-[24px]">
                LOGIN
            </div>
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
            <div
                onClick={() => Login()}
                className={
                    `mt-[30px] lg:mt-[40px] cursor-pointer w-full max-w-[400px] border-2 
                        ${isLoggingIn ? "bg-gray-500 border-gray-500" : "bg-black border-black hover:bg-white hover:text-black text-white"} 
                        transition-all duration-300 rounded-[5px] flex items-center justify-center poppins font-semibold py-[10px]`
                }
            >
                {
                    isLoggingIn ? <AiOutlineLoading className="animate-spin" /> : "SIGN IN"
                }
            </div>
            <div className="flex w-full max-w-[400px] justify-center gap-[10px] mt-[10px]">
                <div>Don't have an account?</div>
                <Link href={'/auth?t=signup'} className="font-bold hover:underline">
                    Signup
                </Link>
            </div>
        </div>
    );
}