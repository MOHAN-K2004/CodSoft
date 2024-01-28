import React from 'react'
import './Portfolio.css'
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { CiLink } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";
const Portfolio = () => {
  return (
   <>
      <div className="navbarcontainer">
        <div className="navbarcontainer-left">
          <p className='myname'>MOHAN</p>
          <p className='myfathername'>KRISHNAN</p>
        </div>
        <div className="navbarcontainer-right">
        <box-icon name="rocket"></box-icon>
        <box-icon  type="solid" name="rocket"></box-icon>
     
          <p className=''>Home</p>
          <p className=''>About</p>
          <p className=''>Books</p>
          <p className=''>Publications </p>
          <p className=''>Press/Media</p>
          <p className=''>Contact</p>
        </div>
      </div>
     <div className="portfoliocontainer">
      <div className="portfoliocontainerbox1-left">
        <h1>Hi, I’m Mohan</h1>
        <p>Welcome to my favourite digital home. Please take a mini tour of my work life so far.
          I hope that you'll enjoy your time visiting.</p>
          <div className='iconbuttons'>
            <a href="https://www.instagram.com/mohan_17k/" target='_black'>
              <RiInstagramLine className='iconbutton'/>
            </a>
            <a href="https://github.com/MOHAN-K2004" target='_black'>
              <CiLinkedin className='iconbutton'/>
            </a>
            <a href="https://www.linkedin.com/in/mohan-k-413b302a8/" target='_black'>
              <TiSocialFacebookCircular className='iconbutton'/>
            </a>
            <div className='personalinfoicons'>
             <div><CiLocationOn style={{marginRight:"10px"}}/>
             <p1>101,</p1> 
             <p1>Neerkunthi,</p1>
             <p1> pennagaram,</p1>
             <p1> Dharmapuri,</p1>
             <p1>TamilNadu,636810.</p1></div> 
             <br />
             <div><FiPhoneCall  style={{marginRight:"10px"}}/> 8524892424</div> 
            </div>
          </div>
      </div>
      
      <div className="portfoliocontainerbox1-right">
        <div className="profileimage">

        <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705668253/1705667919965_q8cbzu.jpg" alt="" />
        </div>
      </div>
     </div>
      <div className="portfoliodetailscontents1">
                     <h1><u>EDUCATION</u></h1>
                  <div className="portfoliodetailscontents-box1">
               
                      <h2>Degree</h2>
                      <div className="degreedetails">
                        <div className="degreedetailsleft">
                       <img src="https://lh3.googleusercontent.com/p/AF1QipON4Xe60MtvkrVfz2bDgwbVkasHINDHN-S2vG8b=s1360-w1360-h1020" alt="" />
                       </div>
                        <div className="degreedetailsright">
                        <span><SlLocationPin  className='locationicon'/>Sri Krishna College of Technology,</span> 
                        <span>Address: WWHG+28R, Golf Rd, Arivoli Nagar,</span>
                        <span>Vivekanandapuram,</span>
                        <span>  Kovaipudur, </span>
                        <span> Tamil Nadu 641042.</span>
                        <br />
                        <h1>4.4</h1>
                        <div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div>

                        
                       </div>
                       <div className="degreepercentage">
                        <b>Percentage</b>
                        <h1 >80%</h1>
                       </div>
                       </div>
                      <h2>Heigher Secondary Education</h2>
                      <div className="hsedetails">
                        <div className="hsedetailsleft">
                       <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705674892/1705674059659_rwbvgt.jpg" alt="" />
                       </div>
                        <div className="hsedetailsright">
                        <span><SlLocationPin  className='locationicon'/>Goverment Higher Secondary School          .</span> 
                        <span>4W5M+PWG, Peyalmari,</span>
                        <span>  Mangarai,Pennagaram, </span>
                        <span>  Dharmapuri, </span>
                        <span>  Tamil Nadu 636813.</span>
                        <br />
                        <h1>4.3</h1>
                        <div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div>
                        
                       </div>
                       <div className="hsepercentage">
                        <b>Percentage</b>
                        <h1 >87%</h1>
                       </div>
                       </div>
                      <h2>SSLC</h2>
                      <div className="sslcdetails">
                        <div className="sslcdetailsleft">
                       <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705674895/1705674059652_whspba.jpg" alt="" />
                       </div>
                        <div className="sslcdetailsright">
                        <span><SlLocationPin className='locationicon'/>Goverment Boys Higher Secondary School,</span> 
                        <span>Pennagaram,</span>
                        <span>  Dharmapuri, </span>
                        <span> Tamil Nadu 636810.</span>
                        <br />
                        <h1>4.3</h1>
                        <div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div>
        
                       </div>
                       <div className="sslcpercentage">
                        <b>Percentage</b>
                        <h1 >75%</h1>
                       </div>
                       </div>
                     </div>

               
      </div>
      <div className="portfoliodetailscontents2">
      <h1><u>SKILLS</u></h1>
      <div className="portfoliodetailscontents2-box">

        <div className='portfoliodetailscontents2left'>
          <p>java 
          <div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div>
          </p>
          <p>c++<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div> </p>
          <p>My SQL<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
          <p>spring boot<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
        </div>
        <div className='portfoliodetailscontents2right'>
          <p>Html<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
          <p>CSS<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
          <p>AWS<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
          <p>Testing for Selenium<div role="img" className="stars" aria-label="4.3 stars"><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf"></div><div class="qxPNJf pCqY8"></div></div></p>
        </div>
      </div>  
      </div>
      <div className="portfoliodetailscontents3">
        <h1><u>PROJECTS</u></h1>
          <h1 style={{marginTop:"10px",marginLeft:"30px"}}>Vendor Management System</h1>
        <div className="portfoliodetailscontents3box">
          <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705675718/WhatsApp_Image_2024-01-19_at_20.14.15_31dbe04d_mvr1bw.jpg" alt="" />
          <p>Vendor Management System using React.js, Spring Boot, and MySQL.
Designed and implemented user-friendly interfaces, conducted testing, and
collaborated cross-functionally for successful project delivery.</p>
<a href="https://github.com/MOHAN-K2004/App-Devolepment/tree/main/Day%2024(review)">
        <CiLink style={{fontSize:"50px"}}>
          </CiLink>
          </a>
        </div>
          <h1 style={{marginTop:"50px",marginLeft:"30px"}}>RAILWAY RESERVATION SYSTEM</h1>
        <div className="portfoliodetailscontents3box">
          <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705675909/WhatsApp_Image_2024-01-19_at_20.21.23_209de57b_gwq9jm.jpg" alt="" />
          <p>Railway Reservation System with React.js, Spring Boot, and MySQL.
Successfully crafted intuitive interfaces, integrated secure authentication, and
collaborated with cross-functional teams for efficient project execution.</p>
<a href="https://github.com/MOHAN-K2004/Railways-React-RestApi">
        <CiLink style={{fontSize:"50px"}}>
          </CiLink>
          </a>
        </div>
          <h1 style={{marginTop:"50px",marginLeft:"30px"}}>E-COMMERCE</h1>
        <div className="portfoliodetailscontents3box">
          <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1705675718/WhatsApp_Image_2024-01-19_at_20.14.16_3c6d352b_vx1ygu.jpg" alt="" />
        
          <p>Competent front-end developer with expertise in crafting a responsive and
visually appealing e-commerce website using React.js. Implemented dynamic
UI components, optimized user experience, and ensured seamless navigation
for an engaging online shopping platform.</p>
         <a href="https://github.com/MOHAN-K2004/Mavericks">
        <CiLink style={{fontSize:"50px"}}>
          </CiLink>
          </a>
        </div>
        

      </div>
      <div className="portfoliodetailscontents4">
        
      </div>
      </>
  )
}

export default Portfolio