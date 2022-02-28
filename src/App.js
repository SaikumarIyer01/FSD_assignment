import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Banner from 'react-js-banner';
import img1 from './img1.png'; 
import img2 from './img2.png'; 
import img3 from './img3.png'; 
import img4 from './img4.png'; 
import img5 from './img5.png'; 
import bannerimg from './banner.png';
import cdc from './cdc.png';
class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
      <br></br>
      <div class="wrapper">
      <h4><b>Around Career Centre</b></h4>
      <hr>
      </hr></div>
       <div class="gallery" id="gallery">
        <div class="gallery-item">
            <div class="content"><img src={img1} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={img2} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={img3} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={img4} alt=""/></div>
        </div>
        <div class="gallery-item">
            <div class="content"><img src={img5} alt=""/></div>
        </div>
        </div><div class="wrapper">
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div class="maintext"><br></br><br></br>
      <h4><b>Welcome to the SRM Career Center</b></h4>
      <hr></hr>
      <p>Students are encouraged to seek the opportunities and enhance their learning experience with a practical knowledge. The Career Centre provides a platform for the students and the companies as well so that the collaboration is mutually beneficial.</p>
      <p>Once a student enters this University, the Institution takes the entire responsibility to develop that individual into a personality. The students are overwhelmed with the opportunities they are provided with. They are left open to a humpty number of choices lying in front of them to choose in parallel to their academics. SRM believes in enhancing its students through dedicated concentration on each and every student and sees to that everyone enhances their talents with the opportunities they are provided with. </p>
      <p>Once the placement season commences, one can feel the vibrant environment on the campus. Talents go barely unrecognized in the SRM Institute of Science and Technology (formerly known as SRM University) as we leave no stone unturned, to place our students.
</p><br></br><br></br>

<h4><b>News and Updates</b></h4>
<hr></hr>
<div class="news">
<div class="news-item">
            <div class="content">469 companies offered 5684 jobs to SRM Institute of Science and Technology (formerly known as SRM University) students in 2016-17.<br></br>
            <a href="something" class="button1">Read more</a></div>
        </div>
        <div class="news-item">
            <div class="content">Super Dream companies offer 10 lacs/ annum and above salary packages<br></br>
            <a href="something" class="button1">Read more</a></div>
        </div>
        <div class="news-item">
            <div class="content">2015-16 - SRM Institute of Science and Technology (formerly known as SRM University) sets new placement record of 6064 on first day<br></br>
            <a href="something" class="button1">Read more</a></div>
        </div>
        <div class="news-item">
            <div class="content">Dream companies offer 5 lacs/ annum and above salary packages<br></br>
            <a href="something" class="button1">Read more</a></div>
        </div>
</div>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div class="banner">

<img src={bannerimg}/>
</div>
    </div><br></br><br></br><br></br><br></br><br></br><br></br>
        <div class="cdc">
        <img src={cdc}/>        
        </div><br></br><br></br><br></br><br></br>
        
        <Footer></Footer>
    </div>
   )
  };
}
export default App;