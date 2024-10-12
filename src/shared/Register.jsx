import { useContext, useState } from "react";
import useAxiosPublic from "../hooks/UseAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
import Swal from "sweetalert2";
import { MdEmail, MdOutlineFiberPin } from "react-icons/md";


const Register = () => {

    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { saveUser } = useContext(AuthContext);




    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = 'regularUser'

 





        const newAccount = {

            email,
            password,
            role
        }
        setError('');
        console.log(newAccount);


        axiosPublic.post('/user', newAccount)
            .then(data => {
                console.log(data);
                setError(data.data.message);
                if (data.data.insertedId) {
                    navigate('/home');


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Sign Up Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }



                axiosPublic.post('/jwt', email)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            localStorage.setItem('user', JSON.stringify(newAccount));
                            saveUser(newAccount);

                        }
                    })



            })

        setError('');











    }
    return (
        <div className="flex items-center justify-center min-h-screen p-5 ">
            <div className="md:w-[30%] w-full shadow-lg p-5 bg-white">

                <div>

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-xl text-center ">Register now</p>
                        <hr className="mb-5 border-2 border-blue-500 w-[50%] " />
                    </div>

                    <form onSubmit={handleSubmit}>




                        <p className="text-gray-500 mt-8">Email</p>
                        <div className="flex gap-5 items-center">
                            <MdEmail className="border-blue-500" />
                            <input className="p-3 border-b-2  border-blue-500 w-full" name="email" type="email" placeholder="Enter your Email" required />
                        </div>





                        <p className="text-gray-500 mt-8">Password</p>
                        <div className="flex gap-5 items-center">
                            <MdOutlineFiberPin className="border-blue-500" /><input className="p-3 border-b-2 border-blue-500 w-full" type="password" placeholder="Enter Password" name="password" required />
                        </div>






                        <p className="mb-2 text-red-500 text-center">{error}</p>

                        <div className="flex justify-center">
                            <button className="btn border-blue-500 border-2 px-10 py-2 rounded-full " type="submit">REGISTER</button>
                        </div>
                        <div className="text-center mt-5 flex flex-col items-center">
                            <p> registered yet?</p>
                            <Link to='/'><p className="font-bold ">LOGIN</p></Link>
                        </div>

                    </form>



                </div>

            </div>
        </div>
    );
};

export default Register;