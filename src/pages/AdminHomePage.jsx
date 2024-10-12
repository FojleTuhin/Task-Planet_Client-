import { useContext } from "react";
import { AuthContext } from "../provider/Provider";
import { Link, useNavigate } from "react-router-dom";
import img1 from '../../public/lllkk_tlu5v5.png'
import { MdOutlineAttachMoney } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/UseAxiosPublic";

const AdminHomePage = () => {


    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();




    const handleLogout = async () => {
        logout();
        navigate('/');

    }


    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            // const res = await axiosPublic.get(`/allUser`);
            const res = await axiosPublic.get(`/allUser`);
            return res.data;
        }
    })

    if (isLoading) {
        return (
            <div className="flex min-h-screen justify-center items-center">
                <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        )

    }
    return (
        <div className="bg-[#F6FBE9] min-h-screen">
            <div className="flex justify-between  py-[13px] mb-16 px-20">
                <p className="text-[15px] font-semibold">Home</p>
                <div className="flex gap-[5px] ">

                    <div className="flex items-center gap-1 border-[1px] border-[#d3d3d3] px-2 rounded-full py-1">
                        <img src={img1} className="h-4 w-4" alt="" />
                        <p className=" text-[11px]  font-bold text-[#ff0000] px-2 rounded-full py-1">17</p>
                    </div>
                    <p className="border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#42A755] font-bold bg-[#e4f6ea] px-2 rounded-full py-1"><MdOutlineAttachMoney />1000</p>

                    <p className="border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#575757] font-bold  px-2 rounded-full py-1"><MdOutlineAttachMoney />1000</p>

                    <button onClick={handleLogout} className="  border-[1px] border-[#d3d3d3] flex items-center gap-1 text-[11px] text-[#42A755] font-bold bg-[#e4f6ea] px-2 rounded-full py-1">Logout</button>


                </div>

            </div>



            <div className="mt-[50px] medium:mt-20 laptop:mt-[100px]   tablet:p-4 medium:p-[50px] ">
                <div className="overflow-x-auto">
                    <table className="table border-collapse mx-auto">
                        {/* Table head */}
                        <thead>
                            <tr className="border-b-0 border-[#DCF1A7] ">
                                <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  pr-[30px] pl-0"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Email</p></th>
                                <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Name</p></th>
                                <th className="border-r border-[#DCF1A7] text-[20px] text-[#FFFFFF] font-medium  px-[30px]"><p className='bg-[#234338] py-4 px-6 rounded-[8px] '>Social media handle</p></th>
                                <th className='px-[30px] text-[20px] text-[#FFFFFF] font-medium '><p className='bg-[#234338] py-4 px-6  rounded-[8px] '>Photos</p></th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                allUser.map((user, index) => (
                                    <tr key={index} className="border-b border-[#DCF1A7] text-[#262626] text-[18px] font-medium ">
                                        <td className="text-center">{user.email}</td>
                                        <td className="text-center">{user.name}</td>
                                        <td className="text-center">{user.socialMediaHandle}</td>
                                        <td className="flex gap-2 text-center py-5 border-[#DCF1A7]">
                                            {/* Check if photos exist and is an array */}
                                            {user.photos && Array.isArray(user.photos) && user.photos.length > 0 ? (
                                                user.photos.map((photo, i) => (
                                                    <Link key={i} to='/linkPage'>
                                                        <img  src={photo.url || photo} alt={`user-photo-${i}`} className=" text-center h-10 w-10 object-cover rounded-full" />
                                                    </Link>
                                                ))
                                            ) : (
                                                "No Photos"
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>

            </div>




        </div>
    );
};

export default AdminHomePage;