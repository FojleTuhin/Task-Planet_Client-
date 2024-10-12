import axios from "axios";
import { useContext, useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import img1 from '../../public/lllkk_tlu5v5.png'
import { AuthContext } from "../provider/Provider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import useUserRole from "../hooks/useUserRole";

const UsersHomePage = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [userRole, refetch]= useUserRole();
    




    const handleLogout = async () => {
        logout();
        navigate('/');

    }



    const handleFileChange = (e) => {
        setImages(e.target.files);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const handle = e.target.handle.value;
        const uploadedImageURLs = [];
        setLoading(true);



        // Loop over each file and upload to ImgBB
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('image', images[i]);

            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
                    params: {
                        key: `${import.meta.env.VITE_IMGBB_API_KEY}`, // ImgBB API key
                    },
                });

                // Collect each image URL
                uploadedImageURLs.push(res.data.data.url);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
            finally {
                setLoading(false); // Set loading to false when the upload is done
            }
        }

        // After uploading all images, store URLs in state
        setImageURLs(uploadedImageURLs);

        const info = {
            name,
            handle,
            imageURLs: uploadedImageURLs
        }

        console.log(info);
        e.target.reset();




        axiosPublic.put(`/updateUser/${user.email}`, info)
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` Successfull`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    refetch();

                }
            })

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

            <div className="">
                <form onSubmit={handleSubmit} className="">
                    <p className="text-[18px] font-bold mb-6">User Submission form</p>
                    <p className="font-semibold">Name</p>
                    <label>
                        <input type="text" name="name" id="name" required className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] py-2 px-4" />
                    </label>
                    <p className="font-semibold">Socail media handle</p>
                    <label>
                        <input type="text" name="handle" id="handle" required className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] py-2 px-4" />
                    </label>
                    <p className="font-semibold">Upload Images</p>
                    <label>
                        <input type="file" multiple name="images" id="images" required className="w-full rounded-[5px] mb-5 " onChange={handleFileChange} />
                    </label>




                    <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 flex items-center py-2 rounded-[4px]">
                        {loading ? <BeatLoader /> : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UsersHomePage;