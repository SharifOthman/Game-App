import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem,{NavitemDropdown} from '../../components/Navitem/Navitem'
  const Header=()=> {
  return (
    <>

<div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <a href="/#"className="navbar-brand">
              <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                  <Navitem><a href="/#" className="nav-link active">Home</a></Navitem>
                  <Navitem><a href="/#" className="nav-link">Browse</a></Navitem>
                   <NavitemDropdown>
                   <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dedails</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Fortnite</a></li>
                            <li><a href="/#" className="dropdown-item">Cull Of Duty</a></li>
                        </ul>
                   </NavitemDropdown>
                  <Navitem><a href="/#" className="nav-link">Stream</a></Navitem>
                  <Navitem><a href="/#" className="nav-link">Profile</a></Navitem>

                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;