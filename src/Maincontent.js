import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Maincontent extends React.Component
{
  render()
  {
    return (
        <div class="row">
  <div class="column">
    <img src="img1.png"/>
  </div>
  <div class="column">
    <img src="img2.png"/>
    <img src="img3.png"/>
    
  </div>
  <div class="column">
  <img src="img4.png"/>
    <img src="img5.png"/>
  </div>
</div>
    )
  }
}
export default Footer;