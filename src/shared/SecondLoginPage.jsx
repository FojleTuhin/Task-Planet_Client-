import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaArrowLeftLong, FaGoogle } from "react-icons/fa6";
import { MdAttachEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondLoginPage = () => {
    return (
        <div className="w-[425px] min-h-screen bg-blue-500 mx-auto">
            <div className="text-white flex justify-between py-[15px] px-5">
                <FaArrowLeftLong className="w-5 h-5" />
                <div className="text-center">
                    <p className="text-[18px] font-semibold">Login/Register</p>
                    <p className="text-[11px] text-black">Ready to play and earn?</p>
                </div>
                <AiOutlineQuestionCircle className="w-5 h-5" />


            </div>
            <div className="bg-white h-screen rounded-t-[30px] py-[15px] px-5">
                <button className=" mx-auto w-full border border-[#0b59f9] btn flex gap-[10px] my-5 text-[#575757] font-semibold h-[36px] justify-center items-center text-[14px] rounded-[5px]"><FaGoogle className="text-[17px] text-black" />SIGN IN WITH GOOGLE</button>


                <div className="flex items-center gap-5 my-[35px]">
                    <hr className="bg-slate-400 w-full divide-x divide-dashed" />
                    Or
                    <hr className="bg-slate-400 w-full divide-x divide-dashed" />
                </div>

                <div className="flex gap-5">
                    <Link to='/thirdPage' className=" text-[#575757] text-[13px] font-bold border-[1px] border-[#0b59f9] px-[10px] py-2 w-full  rounded-[5px]"><p className="flex items-center gap-2 text-center justify-center"><MdOutlinePhoneInTalk className="h-5 w-5" />MOBILE</p></Link>
                    <Link to='/thirdPage' className=" text-[#575757] text-[13px] font-bold border-[1px] border-[#0b59f9] px-[10px] py-2 w-full  rounded-[5px]"><p className="flex items-center gap-2 text-center justify-center"><MdAttachEmail className="h-5 w-5" />EMAIL</p></Link>
                </div>

            </div>

        </div>
    );
};

export default SecondLoginPage;