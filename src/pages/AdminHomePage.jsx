import { useContext } from "react";
import { AuthContext } from "../provider/Provider";
import { useNavigate } from "react-router-dom";
import img1 from '../../public/lllkk_tlu5v5.png'
import { MdOutlineAttachMoney } from "react-icons/md";

const AdminHomePage = () => {


    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();




    const handleLogout = async () => {
        logout();
        navigate('/');

    }
    return (
        <div className="w-[425px] min-h-screen mx-auto  ">
            <div className="flex justify-between px-[5px] py-[13px] mb-16">
                <p className="text-[15px] font-semibold">Home</p>
                <div className="flex gap-[5px]">

                    <div className="flex items-center gap-1 border-[1px] border-[#d3d3d3] px-2 rounded-full py-1">
                        <img src={img1} className="h-4 w-4" alt="" />
                        <p className=" text-[11px]  font-bold text-[#ff0000] px-2 rounded-full py-1">17</p>
                    </div>
                    <p className="border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#42A755] font-bold bg-[#e4f6ea] px-2 rounded-full py-1"><MdOutlineAttachMoney />1000</p>

                    <p className="border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#575757] font-bold  px-2 rounded-full py-1"><MdOutlineAttachMoney />1000</p>

                    <button onClick={handleLogout} className="  border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#42A755] font-bold bg-[#e4f6ea] px-2 rounded-full py-1">Logout</button>


                </div>

            </div>
        </div>
    );
};

export default AdminHomePage;