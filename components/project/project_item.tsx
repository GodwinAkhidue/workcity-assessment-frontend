export default function Project_Item({ i, setEditClient, setEditId }: { i: any, setEditClient: Function, setEditId: any }) {
    return (
        <div className="p-[15px] bg-white w-full open-sans h-max rounded-[5px] shadow-sm shadow-gray-300 flex flex-col gap-[5px] text-[14px]">
            <div className="flex gap-[5px]">
                <b>Name:</b>
                {i.name}
            </div>
            <div className="flex gap-[5px]">
                <b>Status:</b>
                {i.status}
            </div>
            <div className="flex gap-[5px]">
                <b>Duration:</b>
                {i.duration}
            </div>
            <div className="flex gap-[5px]">
                <b>Deadline:</b>
                {i.deadline}
            </div>
            <div className="flex gap-[5px]">
                <b>Date Started:</b>
                {i.started_at}
            </div>
            <div className="flex gap-[5px] mt-[10px] text-[12px]">
                <div
                    onClick={() => {
                        setEditId(i.id);
                        setEditClient(true)
                    }}
                    className="border border-black px-[5px] py-[3px] rounded-[5px] bg-black text-white font-semibold cursor-pointer"
                >
                    Edit Project
                </div>
            </div>
        </div>
    );
}