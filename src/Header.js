import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './career center pics.png'; 
class Header extends React.Component
{
  render()
  {
    return (
        <header class="header">
        <div class="wrapper">
            <h1 class="site-title">
            </h1>
        </div>
        <div class="img1">
        <img src={logo} />
        </div>
        <nav class="navigation">
            <div class="wrapper">
                <ul class="navigation-list ul-reset" >
                
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Home
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Career Centre
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Placement
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Recruiters
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Super Dream and Dream Offers
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            CDC
                        </a>
                    </li>
                    <li class="navigation-item ib">
                        <a href="#" class="navigation-link">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
      
    )
  }
}
export default Header;