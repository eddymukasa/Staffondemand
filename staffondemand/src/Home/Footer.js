
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Footer.css';
import facebookImg from '../Assets/Images/facebook.png';
import twitterImg from '../Assets/Images/twitter.png';

class Footer extends Component{

    render(){
      return(
//         <div class="footer">
//         <div className = "Row">
//           <div className = "Column">
//           <a href="https://www.w3schools.com">
// <img class="socials" border="0" alt="W3Schools" src={facebookImg} width="100" height="100"></img>
// </a>           
// <a href="https://www.w3schools.com">
// <img class="socials" border="0" alt="W3Schools" src={twitterImg} width="100" height="100"></img>
// </a>      


//           </div>
//           <div className = "Column">
//           <ul>
//         <li><a href="">Nurseries</a></li>
//         <li><a href="">Staff</a></li>
//         <li><a href="">About us</a></li>
//         <li><a href="">Faq</a></li>
//         <li><a href="">Contact us</a></li>
//           </ul>
//           </div>
//           <div className = "Column">
//           <ul>
//         <li><a href="">Terms and conditions</a></li>
//         <li><a href="">Privacy statement</a></li>
        
//           </ul>
          
//           </div>
          
//           </div>
//           <p>&copy; Staff on Demand</p>
//         </div>

<footer class="footer">
<div >
<div class="row">
<div class=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>

<p class="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
<p><i class="fa fa-phone"></i>  +91-9999878398  </p>
<p><i class="fa fa fa-envelope"></i> info@example.com  </p>


</div>


<div class=" col-sm-4 col-md  col-6 col">
<h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

<ul class="footer_ul_amrc">
<li><a href="">Terms and conditions</a></li>
<li><a href="">Privacy statement</a></li>

</ul>

</div>



<div class=" col-sm-4 col-md  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>


<a href="https://www.w3schools.com">
 <img class="socials" border="0" alt="W3Schools" src={facebookImg} width="100" height="100"></img>
 </a>           
 <a href="https://www.w3schools.com">
 <img class="socials" border="0" alt="W3Schools" src={twitterImg} width="100" height="100"></img>
 </a>   

</div>
</div>
</div>


<div>
<ul class="foote_bottom_ul_amrc">
<li><a href="">Nurseries</a></li>
<li><a href="">Staff</a></li>
<li><a href="">Faq</a></li>
<li><a href="">About us</a></li>
<li><a href="">Contact us</a></li>

</ul>

<p class="text-center">Copyright Staff On Demand 2018 </p>



</div>

</footer>
      );
    }
  }

  export default Footer;