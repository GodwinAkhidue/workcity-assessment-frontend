"use client"
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { server_url } from "@/lib/constants";
import axios from "axios";
import { useUser } from "@/context/authContext";
import { toast } from "react-toastify";

export default function New_Client_Modal({ newClient, setNewClient, fetchClients }: { newClient: boolean, setNewClient: Function, fetchClients: Function }) {
    const [fullname, setFullname] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isCreatingNewClient, setIsCreatingNewClient] = useState(false);
    const { user } = useUser();

    async function createNewClient() {
        setIsCreatingNewClient(true);

        await axios.post(`${server_url}/api/new_client`, {
            fullname,
            company,
            position,
            email,
            phone,
            user_id: user.id
        }, { withCredentials: true })
            .then((res) => {
                setIsCreatingNewClient(false);
                if (res.data.success !== true) {
                    return toast.warn(res.data.message)
                }
                fetchClients();
                setFullname("")
                setCompany("")
                setPosition("")
                setPhone("")
                setEmail("")
                setNewClient(false);
                return toast.success("Created New Client")
            })
            .catch(() => {
                setIsCreatingNewClient(false);
                return toast.error("Could not connect to server")
            })
    }

    return (
        <div className={`fixed ${newClient ? "w-full h-full" : "w-0 h-0 invisible"} transition-all duration-300 bg-[#0000004d] top-0 left-0 z-40 flex items-center justify-center px-[15px] overflow-hidden`}>
            <div className="bg-white w-full px-[15px] pt-[10px] pb-[30px] rounded-[5px] flex flex-col items-center justify-center gap-[20px] max-w-[450px]">
                <div className="w-full flex justify-end">
                    <div onClick={() => setNewClient(false)} className="cursor-pointer text-[24px]">
                        <IoClose />
                    </div>
                </div>
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Fullname"
                    type="email"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Position"
                    type="email"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Phone"
                    type="email"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div
                    onClick={() => createNewClient()}
                    className={
                        `mt-[10px] cursor-pointer w-full max-w-[400px] border-2 
                        ${isCreatingNewClient ? "bg-gray-500 border-gray-500" : "bg-black border-black hover:bg-white hover:text-black text-white"} 
                        transition-all duration-300 rounded-[5px] flex items-center justify-center poppins font-semibold py-[10px]`
                    }
                >
                    {
                        isCreatingNewClient ? <AiOutlineLoading className="animate-spin" /> : "CREATE CLIENT"
                    }
                </div>
            </div>
        </div>
    );
}