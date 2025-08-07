import Link from "next/link";

export default function Login() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center px-[20px] open-sans">
            <div className="poppins font-bold text-[24px]">
                LOGIN
            </div>
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Email Address"
            />
            <input
                className="mt-[20px] border-2 border-gray-400 h-[50px] w-full max-w-[400px] px-[10px] rounded-[5px]"
                placeholder="Password"
                type="password"
            />
            <div className="mt-[30px] lg:mt-[40px] cursor-pointer w-full max-w-[400px] bg-black border-2 border-black hover:bg-white hover:text-black transition-all duration-300 rounded-[5px] text-white flex items-center justify-center poppins font-semibold py-[10px]">
                SIGN IN
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