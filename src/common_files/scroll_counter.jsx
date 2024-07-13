import '../common_files_css/scroll_counter.css';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ScrollAnimation from 'react-animate-on-scroll';
const Scroll_Counter=()=>{
  const [counterstate,setcounterstate]=useState(false);
    return(
        <>
        <ScrollAnimation animateIn="fadeIn">
        <section class="ftco-section ftco-no-pt ftco-no-pb my-5">
       <div class="container-fluid px-3" >
<div class="row">
<div class="col-md-6 col-xl-6 col-xxl-6 d-flex align-items-top aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="img">
<img src="/images/abc_count_img.webp" className="img_count img-fluid" alt=""/>
</div>
</div>
<div class="count_heading col-md-6 col-xl-6 col-xxl-6 heading-section d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<div class="mt-0  py-3">
<span class="subheading">Welcome to our Health Clinic</span>
<h2 class="mb-2 count_p">Life is a Health Clinic and Innovative Approach to Treatment</h2>
{/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
<ScrollTrigger onEnter={()=>setcounterstate(true)} onExit={()=>setcounterstate(false)}>
<div class="row section-counter viewed">
<div class="count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2 aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people-fill text-primary" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
</div>
<div class="text">
<h2 class="number">
  <span class="countup">
    {counterstate &&
    <>
      <CountUp start={0} end={10000}></CountUp>
      </>
    }
 </span>
</h2>
<span class="caption">Patients</span>
</div>
</div>
</div>
<div class=" count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2  aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill-add text-primary" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
</div>
<div class="text">
<h2 class="number"><span class="countup">{counterstate &&
      <CountUp start={0} end={1000}></CountUp>
    }</span></h2>
<span class="caption">Doctors</span>
</div>
</div>
</div>
<div class="count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2 aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill-add text-primary" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
</div>
<div class="text">
<h2 class="number"><span class="countup">{counterstate &&
      <CountUp start={0} end={500}></CountUp>
    }</span></h2>
<span class="caption">Nurse</span>
</div>
</div>
</div>
<div class="count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2 aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-building text-primary" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
</svg>
</div>
<div class="text">
<h2 class="number"><span class="countup">{counterstate &&
      <CountUp start={0} end={100}></CountUp>
    }</span></h2>
<span class="caption">Branch</span>
</div>
</div>
</div>
<div class="count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2 aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-standing text-primary" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
</svg>
</div>
<div class="text">
<h2 class="number"><span class="countup">{counterstate &&
      <CountUp start={0} end={300}></CountUp>
    }</span></h2>
<span class="caption">Works</span>
</div>
</div>
</div>
<div class="count_card col-sm-6 col-md-6 col-lg-4 align-items-stretch mt-2">
<div class="counter-wrap-2 aos-init aos-animate shadow-sm p-2 rounded text-center bg-primary  bg-opacity-10" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-trophy-fill text-primary" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
</svg>
</div>
<div class="text">
<h2 class="number"><span class="countup">{counterstate &&
      <CountUp start={0} end={73}></CountUp>
    }</span></h2>
<span class="caption">Awards</span>
</div>
</div>
</div>
</div>
  
</ScrollTrigger>
 
</div>
</div>
</div>
</div>
</section>
</ScrollAnimation>
         
        </>
    )
}
export default Scroll_Counter;