import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbars.css';
import monico from '../../Img/img.png';

const Navbars = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);
    const handleSignOUt = () => {
        setLoggedInUser({})
    }
    return (
        <div className=" mb-3  ">
            {/* Navbar start here  */}




            <Navbar expand="sm" className=" nav_bar py-2">

                <img src={monico} alt="" />
                <h1 className="text-center"> Monico Mart 
                    
                </h1>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mx-4 my-3 ">

                        <NavLink className="p-2 mx-3    " style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                        <NavLink className="p-2 mx-3  " style={{ textDecoration: 'none' }} to="/search">Search</NavLink>
                        <NavLink className="p-2 mx-3  " style={{ textDecoration: 'none' }} to="/shipment">Shipment</NavLink>


                        {
                            loggedInUser.email ? <NavLink onClick={handleSignOUt} className="p-2 mx-3  " style={{ textDecoration: 'none', backgroundColor: 'tomato', borderRadius: "10px", color: 'whitesmoke' }} to="/login">logout </NavLink> :
                                <NavLink className="p-2 mx-3  " style={{ textDecoration: 'none' }} to="/login">Login </NavLink>
                        }

                        {
                            loggedInUser.email ? <button className="p-2 mx-3 text  " style={{ textDecoration: 'none', backgroundColor: 'crimson', borderRadius: "10px", color: 'whitesmoke', fontWeight: "bolder" }}  >{loggedInUser.displayName} </button>
                                : <NavLink className="p-2 mx-3  " style={{ textDecoration: 'none' }} to="/register">Register </NavLink>
                        }





                    </Nav>
                </Navbar.Collapse>



            </Navbar>









        </div>
    );
};

export default Navbars;