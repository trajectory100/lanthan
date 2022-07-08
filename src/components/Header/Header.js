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
                <span className={"logobox.item1"}><img alt="logo1"  src={Logo1}  /></span>  
                <span className={"logobox.item2"}><img alt="logo2"  src={Logo2}  /></span> 
                <span className={"logobox.item3"}>Hello</span>                     
              </div>
              
            
            
            </header>
            {/* <Navigation /> */}

            
          </div>
  );
}

export default Header;