
import React from 'react';
import { Link } from 'react-router-dom';

//Style
const navbarStyle = {
    position: 'fixed',
    top: "0%",
    left: "0%",
    right: "0%",
    zIndex: "1"
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" style={navbarStyle} data-bs-theme="dark">
            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100">
                    {/* Elementos en la esquina superior izquierda */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Help</a>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex">
                                <input className="form-control me-sm-2" type="search" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>

                    {/* Elementos en la esquina superior derecha */}
                    <ul className="navbar-nav">
                        <li className="nav-item ms-auto"> {/* ms-auto para alinear a la derecha */}
                            <Link className="nav-link" to={"/home/logout"}>
                                Log out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
