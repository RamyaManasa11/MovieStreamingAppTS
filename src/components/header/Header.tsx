import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { useState } from "react";

const Header = () => {
    const [mobile, setMobile] = useState(false);
  return (
    <>
        <header>
            <div className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <img className="MyLogo" src='./images/logo.webp' alt='' />
                    </div>
                    <ul className={mobile ? 'navMenu-list' : 'flexSB'} onClick={()=> setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/movies'>Movies</Link>
                        <Link to='/pages'>Pages</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                    <button className="toggle" onClick={()=> setMobile(!mobile)}>
                        {mobile ? <FontAwesomeIcon className="fontIcons" icon={faTimes} />
                        :<FontAwesomeIcon className="fontIcons" icon={faBars} />}
                        
                    </button>
                </nav>
                <div className="account flexSB">
                    <FontAwesomeIcon className="fontIcons" icon={faSearch} />
                    <FontAwesomeIcon className="fontIcons" icon={faBell} />
                    <FontAwesomeIcon className="fontIcons" icon={faUser} />
                    <button>Subscribe Now</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
