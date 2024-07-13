import '../common_files_css/welcome_about_us_link.css'; 
const Welcome_About_Us_Link = () => {
  return (
    <>
    <div class="container-fluid my-5">
<div class="row align-items-center">
<div class="col-xl-6 col-lg-6 ">
<div class="welcome_thumb">
<div class="thumb_1">
<img src="/images/welcome_img.jpg" className="about_img img-fluid rounded" height="100%" width="100%" alt=""/>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-6">
<div class="welcome_docmed_info">
<h1 className='text_about_head display-5'>Welcome To <span className='text-black text-opacity-50'>Health Clinic.</span></h1>
<p className='text_about_p'>We want to make sure your experience is as positive as possible. Your health must your priority otherwise it will be a hindrance in your path. We’re always up for a challenge.</p>

<p><i class="bi bi-check-circle-fill text-primary"></i> Doctors know best.</p>
<p><i class="bi bi-check-circle-fill text-primary"></i> We’re number one.</p>
<p><i class="bi bi-check-circle-fill text-primary"></i> Absolute care, every day.</p>

<a href="about.html" class="boxed-btn6 btn btn-outline-primary">About us</a>
</div>
</div>
</div>
</div>
    </>
  )
}
export default Welcome_About_Us_Link;
