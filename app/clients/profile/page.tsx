"use client"
import { useSearchParams } from "next/navigation";
import Header from "@/components/header/header";
import axios from "axios";
import { server_url } from "@/lib/constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Client_Profile_View_Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    const [client, setClient] = useState<any>();

    async function fetchClient() {
        try {
            const res = await axios.post(`${server_url}/api/get_client`, { id })
            if (res.data.success !== true) {
                return toast.warn(res.data.message);
            }
            return setClient(res.data.client)
        } catch {
            return toast.error("Error connecting with server")
        }
    }

    useEffect(() => {
        fetchClient();
    }, [])

    return (
        <div>
            <Header />
            <div className="p-[15px]">
                <div className="flex items-center justify-between">
                    <div className="font-bold poppins text-[26px]">{client?.fullname && client.fullname}</div>
                </div>
                <div className="mt-[15px] bg-gray-100 rounded-[10px] p-[15px] flex flex-col gap-[15px]">
                    <div className="flex gap-[5px]">
                        <b>Company:</b>
                        {client?.company && client.company}
                    </div>
                    <div className="flex gap-[5px]">
                        <b>Position Held:</b>
                        {client?.position && client.position}
                    </div>
                    <div className="flex gap-[5px]">
                        <b>Email:</b>
                        {client?.email && client.email}
                    </div>
                    <div className="flex gap-[5px]">
                        <b>Phone:</b>
                        {client?.phone && client.phone}
                    </div>
                </div>
            </div>
        </div>
    );
}