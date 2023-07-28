  
 import a from '/a.jpg'
 import b from '/b.jpg'
 import c from '/c.jpg'
 import d from '/d.jpg'
 import e from '/e.jpg'
 import f from '/f.jpg'
 import g from '/g.jpg'
 import h from '/h.jpg'

//  import {Link, NavLink } from "react-router-dom";
 import React from 'react';
 const NavBar=()=>{
  
    return (
<>

 <div className="total">

 <div className='header'>

<div className="first">
<p className='yas'>Yaswanth kumar</p>
<p className='avai'>Now available</p>
</div>

   <div className="second">

<img className="a" src="/LogoBe.jpg" alt="a" />

<img className='b' src="/LogoLinkedin.jpg" alt="b" />

<img className='c' src="/dribbble-ball-mark.jpg" alt="c" />
   </div>
</div> 

<div className="total1">
<div className="total2">


     <div className="hi">
     <p>👋Hi , I'm Yaswanth</p>
</div>


<div className="personal1">
   <p>I’m a Student in the college of Dr. N.G.P Institute of Technology, coimbatore.Currently persuing my Under graduation in the year of 3. 
   </p>
</div>


<div className="personal2">
<p>I’m looking for new opportunities,I attended internship at <p className='krishtech'>Krishtech</p></p>
</div>

<div className="project">
  👇Explore my projects
 
</div>

</div>

<div className="altimg">
   <div className="back" style={{
         
         width: "250px",
         height: "250px",
         flexShrink: 0,
   borderRadius: "13.153px",
   backgroundColor:"#FAEBD7",
   boxShadow: "0px 40px 30px 0px rgba(25, 25, 46, 0.04)"
   
   }}>
   
   <img className="face" src="yas.jpg" alt="photo" />
   <div className="aimg" >
   <img  src={a} alt="a" />
   </div>
   <div className="bimg" >
   <img  src={b} alt="b" />
   </div>
   <div className="cimg" >
   <img  src={c} alt="c" />
   </div>
   <div className="dimg" >
   <img  src={d} alt="d" />
   </div>
   <div className="eimg" >
   <img  src={e} alt="e" />
   </div>
   <div className="fimg" >
   <img  src={f} alt="f" />
   </div>
   <div className="gimg" >
   <img  src={g} alt="g" />
   </div>
   <div className="himg" >
   <img  src={h} alt="h" />
   </div>


 
   </div>
  </div>
  </div>

<div className="bottom">
   <div >
      <img className="one" src="one.jpg" alt="one" />
   </div>
   <div >
      <img className="two" src="two.jpg" alt="two" />
   </div>
   <div >
      <img className="three" src="three.jpg" alt="three" />
   </div>
</div>

</div>
    </>
    );
    };
    export default NavBar;