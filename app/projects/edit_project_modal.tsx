"use client"
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { server_url } from "@/lib/constants";
import axios from "axios";
import { toast } from "react-toastify";

export default function Edit_Client_Modal(
    {
        editClient,
        setEditClient,
        fetchClients,
        clients,
        editId
    }:
        {
            editClient: boolean,
            setEditClient: Function,
            fetchClients: Function,
            clients: any,
            editId: any
        }
) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");
    const [deadline, setDeadline] = useState("");
    const [isCreatingNewClient, setIsCreatingNewClient] = useState(false);


    async function createNewClient() {
        setIsCreatingNewClient(true);

        await axios.post(`${server_url}/api/update_project`, {
            name, status, duration, deadline,
            id: editId
        }, { withCredentials: true })
            .then((res) => {
                setIsCreatingNewClient(false);
                if (res.data.success !== true) {
                    return toast.warn(res.data.message)
                }
                fetchClients();
                setEditClient(false);
                return toast.success("Updated Project")
            })
            .catch(() => {
                setIsCreatingNewClient(false);
                return toast.error("Could not connect to server")
            })
    }

    useEffect(() => {
        if (!clients) {
            return;
        }
        const data = clients.find((i: any) => i.id === editId);
        setName(data.name);
        setStatus(data.status);
        setDuration(data.duration);
        setDeadline(data.deadline);
    }, [editId])

    return (
        <div className={`fixed ${editClient ? "w-full h-full" : "w-0 h-0 invisible"} transition-all duration-300 bg-[#0000004d] top-0 left-0 z-40 flex items-center justify-center px-[15px] overflow-hidden`}>
            <div className="bg-white w-full px-[15px] pt-[10px] pb-[30px] rounded-[5px] flex flex-col items-center justify-center gap-[20px] max-w-[450px]">
                <div className="w-full flex justify-end">
                    <div onClick={() => setEditClient(false)} className="cursor-pointer text-[24px]">
                        <IoClose />
                    </div>
                </div>
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Fullname"
                    type="email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Company"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Position"
                    type="email"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <input
                    className="border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                    placeholder="Email Address"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
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
                        isCreatingNewClient ? <AiOutlineLoading className="animate-spin" /> : "UPDATE PROJECT DETAILS"
                    }
                </div>
            </div>
        </div>
    );
}