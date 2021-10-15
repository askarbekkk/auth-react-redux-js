import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
const Header = () => {

    const user = useSelector(store => store.user.user)
    return (
        <>
            <div className=''>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to={'/'} className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

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
                                    <button className="nav-link" >Logout</button>
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