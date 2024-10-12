import { useContext } from "react";
import UsersHomePage from "./UsersHomePage";
import { AuthContext } from "../provider/Provider";
import useUserRole from "../hooks/useUserRole";
import AdminHomePage from "./AdminHomePage";

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    const [userRole] = useUserRole();
    console.log(userRole.role);

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