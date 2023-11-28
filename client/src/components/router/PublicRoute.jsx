
import {Navigate, Outlet} from 'react-router-dom';
import {useAuthContext} from '../../contexts/AuthContext';

//components
import NavbarPublic from '../../components/NavbarPublic';

function PublicRoute() {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={"/home"}/>
    }
    return (
        <div>
            <NavbarPublic/>
            <Outlet/>
        </div>
    )
}

export default PublicRoute;
