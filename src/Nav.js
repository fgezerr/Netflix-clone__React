import React , {useEffect, useState} from 'react';
import "./Nav.css";

function Nav() {
    const [show, setShow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setShow(true);
          } else setShow(false);
        });
        return () => {window.removeEventListener("scroll" , null);
    };
      }, []);

  return (
    
    <div className={`nav ${show && "nav__black"}`}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        alt="Netflix logo"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        className="nav__avatar"
        alt="Netflix avatar"
      />
    </div>
  )
}

export default Nav;