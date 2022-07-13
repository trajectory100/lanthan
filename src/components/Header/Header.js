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
                <div className={"item1"}>
                <span className={"log1"}><img alt="logo1"  src={Logo1}  /></span>
                </div>
                 
                <span className={"item2"}><img alt="logo2"  src={Logo2}  /></span> 
                <div className={"item3"}>
                  <span className={"item4"}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                        <span class="searchBox">          
                            <form action="/search?">
                                  <input className="searchInput" type="search" name="q" placeholder="Search" />
                                  <button className="searchButton" type="submit">
                                  <i className="material-icons"> search</i>
                                  </button>
                            </form>
                        </span>

                  </span>
                  <span className={"item5"}>
                    <ul>
                      <li>Fon: +49 (421) 696465-0 </li>
                      <li>info@lanthan.eu</li>
                    </ul>
                  </span>  
                </div>
              </div>
              
            
            
            </header>
            {/* <Navigation /> */}

            
          </div>
  );
}

export default Header;