import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="w-[425px] min-h-screen bg-[#e6b325] mx-auto flex flex-col justify-between">
                <div className="p-[10px]">
                    <img src="https://i.ibb.co.com/yBs5RGs/onboard-1-zeprst.png" alt="" />
                    <div className="text-center">
                        <p className="text-[20px] font-semibold mb-5">A Platform For Online Earners</p>
                        <p className="text-[12px]">Task Planet Is An Online Money Earning Website For The Individuals Looking For Small Tasks And Getting Paid For It</p>
                    </div>
                </div>
                <div className="bg-white rounded-t-[30px] px-[15px] py-5">
                    <p className="text-[17px] font-bold mb-[10px]">Login with Task Planet                </p>
                    <p className="text-[13px]">Login to earn points using various amazing and easy tools provided in the app and then use earned points for reward!!</p>

                    <div>
                        <button className="bg-[#e5f5eb] mx-auto w-[355px] btn flex gap-[10px] my-5 text-[#575757] font-semibold h-[36px] justify-center items-center text-[14px] rounded-[2px]"><FaGoogle className="text-[17px] text-black" />Sign in with Google</button>

                        <Link to='/secondLoginPage'><p className="text-center text-[#575757] text-[13px] font-bold">Other Login Method</p></Link>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Login;