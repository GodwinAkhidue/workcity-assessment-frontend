"use client"
import Project_Item from "@/components/project/project_item";
import Header from "@/components/header/header";
import { useState, useEffect } from "react";
import New_Client_Modal from "./new_project_modal";
import axios from "axios";
import { server_url } from "@/lib/constants";
import { toast } from "react-toastify";
import Edit_Client_Modal from "./edit_project_modal";
import { useSearchParams } from "next/navigation";

export default function Projects_Page() {
    const [newClient, setNewClient] = useState(false);
    const [editClient, setEditClient] = useState(false);
    const [editId, setEditId] = useState("");
    const [clients, setClients] = useState<any>();
    const params = useSearchParams();
    const client_id = params.get("client_id");

    async function fetchClients() {

        await axios.post(`${server_url}/api/get_projects`, {
            client_id
        }, { withCredentials: true })
            .then((res) => {
                if (res.data.success !== true) {
                    return toast.warn(res.data.message)
                }
                setClients(res.data.clients)
            })
            .catch(() => {
                return toast.error("Could not connect to server")
            })
    }

    useEffect(() => {
        fetchClients();
    }, [])


    return (
        <div>
            <Header />
            <div className="p-[15px]">
                <div className="flex items-center justify-between">
                    <div className="font-bold poppins text-[26px]">Projects</div>
                    <button
                        onClick={() => setNewClient(true)}
                        className="bg-black px-[10px] py-[5px] text-[12px] font-semibold poppins text-white rounded-[5px] cursor-pointer"
                    >
                        Add New Project
                    </button>
                </div>
                <div className="mt-[15px] bg-gray-100 rounded-[10px] p-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    {
                        clients && clients.length > 0 && clients.map((i: any, index: any) => (
                            <Project_Item i={i} key={index} setEditClient={setEditClient} setEditId={setEditId} />
                        ))
                    }
                </div>
            </div>
            <New_Client_Modal newClient={newClient} setNewClient={setNewClient} fetchClients={fetchClients} client_id={client_id} />
            <Edit_Client_Modal editClient={editClient} setEditClient={setEditClient} fetchClients={fetchClients} clients={clients} editId={editId} />
        </div>
    );
}