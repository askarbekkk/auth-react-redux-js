import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/userAction";
const Header = () => {
const dispatch = useDispatch()
    const user = useSelector(store => store.user.user)
    return (
        <>
            <div className=''>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">


                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/news'} className="nav-link" href="#">News</Link>
                            </li>


                            {
                                !user &&  <li className="nav-item">
                                    <Link to={'/login'} className="nav-link " >Login</Link>
                                </li>
                            }
                            {
                                user &&
                                <li className="nav-item">
                                    <button className=" btn btn-outline-secondary nav-link p-2 "
                                            onClick={() => dispatch(logout()) } >Logout</button>
                                </li>
                            }
                        </ul>
                        <form className="form-inline my-2 my-lg-0 d-flex justify-content-between">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                </nav>

            </div>
</>
)
};

export default Header;