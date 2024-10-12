import { useContext } from "react";
import UsersHomePage from "./UsersHomePage";
import { AuthContext } from "../provider/Provider";
import useUserRole from "../hooks/useUserRole";
import AdminHomePage from "./AdminHomePage";
import { ClimbingBoxLoader } from "react-spinners";

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    const [userRole, isLoading] = useUserRole();
    console.log(userRole.role);
    
    isLoading &&(
        <div className="min-h-screen flex items-center justify-center">
            <ClimbingBoxLoader />
        </div>
    )



    

    return (
        <div>
            {
                userRole.role === "regularUser" &&
                <UsersHomePage></UsersHomePage>
            }
            {
                userRole.role === "admin" &&
               <AdminHomePage></AdminHomePage>
            }
        </div>
    );
};

export default Home;