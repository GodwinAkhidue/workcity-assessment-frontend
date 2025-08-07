import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="w-full h-[calc(100vh-79px)] lg:h-[calc(100vh-85px)] relative">
            <Image src={"/workcitybgvideo.gif"} alt="workcity" fill className="object-cover" />
            <div className="bg-[#0000004d] absolute top-0 left-0 w-full h-full z-10  flex flex-col items-center justify-center">
                <div className="poppins font-bold text-white text-center text-[26px] lg:text-[36px]">
                    WORKCITY DEVELOPER ASSESSMENT
                </div>
                <Link
                    href={"/auth?t=login"}
                    className="bg-white mt-[20px] lg:mt-[30px] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer poppins text-black font-semibold px-[25px] lg:px-[30px] lg:py-[10px] py-[7px] text-[14px] lg:text-base rounded-[5px]"
                >
                    GET STARTED
                </Link>
            </div>
        </div>
    );
}