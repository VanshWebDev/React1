import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    function customColor() {
        let customColor = document.querySelector("#customColor")
        props.customColor(customColor.value)
    }
    return (
        <div>
            {/*  */}
            <nav className={`navbar navbar-expand-lg `} >
                <div className="container-fluid">
                    <p className={`navbar-brand text-${props.textMode}`} >Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.textMode}`} active aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.textMode}`} to="/About" >About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p className={`nav-link dropdown-toggle text-${props.textMode}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </p>
                                <ul className="dropdown-menu">
                                    <li><p className="dropdown-item" >Action</p></li>
                                    <li><p className="dropdown-item" >Another action</p></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><p className="dropdown-item" >Something else here</p></li>
                                </ul>
                            </li>
                        </ul>
                        <div>
                            <input type="color" id="customColor" onChange={customColor} />
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.clicked} />
                            <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault" >{props.textMode}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
