import Link from "next/link";

export default function Client_Item({ i, setEditClient, setEditId }: { i: any, setEditClient: Function, setEditId: any }) {
    return (
        <div className="p-[15px] bg-white w-full open-sans h-max rounded-[5px] shadow-sm shadow-gray-300 flex flex-col gap-[5px] text-[14px]">
            <div className="flex gap-[5px]">
                <b>Name:</b>
                {i.fullname}
            </div>
            <div className="flex gap-[5px]">
                <b>Company:</b>
                {i.company}
            </div>
            <div className="flex gap-[5px]">
                <b>Position Held:</b>
                {i.position}
            </div>
            <div className="flex gap-[5px]">
                <b>Email:</b>
                {i.email}
            </div>
            <div className="flex gap-[5px]">
                <b>Phone:</b>
                {i.phone}
            </div>
            <div className="flex gap-[5px] mt-[10px] text-[12px]">
                <Link
                    href={`/clients/profile?id=${i.id}`}
                    className="border border-black px-[5px] py-[3px] rounded-[5px] bg-black text-white font-semibold cursor-pointer"
                >
                    View Profile
                </Link>
                <div
                    onClick={() => {
                        setEditId(i.id);
                        setEditClient(true)
                    }}
                    className="border border-black px-[5px] py-[3px] rounded-[5px] bg-black text-white font-semibold cursor-pointer"
                >
                    Edit Profile
                </div>
                <Link
                    href={`/projects?client_id=${i.id}`}
                    className="border border-black px-[5px] py-[3px] rounded-[5px] bg-black text-white font-semibold cursor-pointer"
                >
                    View Projects
                </Link>
            </div>
        </div>
    );
}