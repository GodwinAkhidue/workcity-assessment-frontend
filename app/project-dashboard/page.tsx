import Header from "@/components/header/header";
import Project_Item from "@/components/project/project_item";

export default function Project_Dashboard_Page() {
    return (
        <div>
            <Header />
            <div className="p-[15px]">
                <div className="font-bold poppins text-[26px]">Projects</div>
                <div className="mt-[15px] min-h-screen bg-gray-100 rounded-[10px] p-[15px] grid grid-cols-1">
                    <Project_Item />
                </div>
            </div>
        </div>
    );
}