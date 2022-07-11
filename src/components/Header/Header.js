import React from "react";
import './Header.css';
import Logo1 from './Logo/Logo1/LanthanLogo.jpg';
import Logo2 from './Logo/Logo2/Lanthan-Safe-Sky_Link.png';
// import Navigation from './components/Navigation/Navigation';

const Header = () => {
  return (
          <div>
            <header>
              <div className={"logobox"}>
                <span className={"item1"}><img alt="logo1"  src={Logo1}  /></span>  
                <span className={"item2"}><img alt="logo2"  src={Logo2}  /></span> 
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <span className={"item4"}>
                  <form action="#">
                        {/* <input className="searchInput" type="search" name="q" placeholder="Search" /> */}
                        <button className="searchButton" type="submit">
                        <i className="material-icons"> search</i>
                        </button>
                  </form>
               
                <span className={"item3"}>
                  <ul>
                    <li>Fon: +49 (421) 696465-0</li>
                    <li>info@lanthan.eu</li>
                  </ul>
                </span>  
                </span>
              </div>
              
            
            
            </header>
            {/* <Navigation /> */}

            
          </div>
  );
}

export default Header;