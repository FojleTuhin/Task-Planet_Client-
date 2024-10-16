import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/UseAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/Provider";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const ThirdPage = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { saveUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        setLoading(true);

        const user = {
            email,
            pass
        };

        axiosPublic.post('/login', user)
            .then(data => {
                if (data.status === 200) {
                    axiosPublic.post('/jwt', email)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem('access-token', res.data.token);
                                localStorage.setItem('userInfo', JSON.stringify(user));
                                saveUser(user);
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Log in Successful",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/home');
                            }
                        }).catch(error => {
                            setError('Failed to retrieve token');
                        });
                } else {
                    setError(data.response.data.message);
                }
            })
            .catch(error => {
                setError(error.response?.data?.message || 'Login failed');
            })
            .finally(() => {
                
                setLoading(false);
            });
    };

    return (
        <div>
            <div className="w-[425px] min-h-screen bg-blue-500 mx-auto">
                <div className="text-white flex justify-between py-[15px] px-5">
                    <FaArrowLeftLong className="w-5 h-5" />
                    <div className="text-center">
                        <p className="text-[18px] font-semibold">Login/Register</p>
                        <p className="text-[11px] text-black">Ready to play and earn?</p>
                    </div>
                    <AiOutlineQuestionCircle className="w-5 h-5" />
                </div>

                <div className="bg-white h-screen rounded-t-[30px] py-[15px] px-5 pt-[30px]">
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full border-b-[1px] border-b-[#aaa] py-[7px] px-[9px] bg-[#f5f5f5] mb-7 text-[11px] " /> <br />
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full border-b-[1px] border-b-[#aaa] py-[7px] px-[9px] bg-[#f5f5f5] text-[11px]" />
                        <p className="text-right text-[#0b59f9] text-[13px] font-bold mt-[5px]">Forgot Password?</p>

                        <button className="py-2 px-[10px] w-full bg-[#808080] text-center text-white font-bold mt-10 rounded-[5px]" disabled={loading}>
                            {loading ? <BeatLoader size={10} color="white" /> : 'LOGIN'}
                        </button>
                    </form>

                    <p className="mb-2 text-red-500 text-center mt-5">{error}</p>
                    <Link to='/register'><p className="text-center text-[#0b59f9] text-[13px] font-bold mt-[5px]">New? register now</p></Link>

                    <div className="mt-10 space-y-5">
                        <div>
                            <p>Admin: fojletuhin@gmail.com </p>
                            <p>pass: 1234</p>
                        </div>

                        <div>
                            <p>Regular User: abc@gmail.com</p>
                            <p>pass: 1234</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;
