import { useContext } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(UserContext)

    const location = useLocation()
    console.log(location.pathname);
 
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRouter;