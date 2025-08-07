import Client_Item from "@/components/client/client_item";
import Header from "@/components/header/header";

export default function Clients_Page() {
    return (
        <div>
            <Header />
            <div className="p-[15px]">
                <div className="font-bold poppins text-[26px]">Clients</div>
                <div className="mt-[15px] min-h-screen bg-gray-100 rounded-[10px] p-[15px] grid grid-cols-1">
                    <Client_Item />
                </div>
            </div>
        </div>
    );
}