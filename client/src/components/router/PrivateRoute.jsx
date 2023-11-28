
import {Navigate, Outlet} from 'react-router-dom';
import {useAuthContext} from '../../contexts/AuthContext';

//components
import NavbarPrivate from '../../components/NavbarPrivate';

function PublicRoute() {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={"/"}/>
    }
    return (
        <div>
            <NavbarPrivate/>
            <Outlet/>
        </div>
    )
}

export default PublicRoute;
