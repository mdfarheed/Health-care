import '../Css/imageslider.css';
const Imageslider =()=>{
    return(
        <>
        <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class="" aria-current="true"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img height="550px" src="/images/slider_img1.jpg" class="d-block w-100 img" alt="..." aria-hidden="true"/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-start text-dark">
          <h1>Healthy Futures</h1>
          <h5 className='opacity-75'>Creating healthier futures for Your Family.</h5>
          <h6 className='opacity-75'>~By Heath Clinic</h6>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img height="550px" src="/images/slider_img2.jpg" class="d-block w-100 img" alt="..." aria-hidden="true"/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-dark">
          <h1>Doctor Care</h1>
          <h5 className='opacity-75'>Caring for you, one patient at a time.</h5>
          <h6 className='opacity-75'>~By Heath Clinic</h6>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img height="550px" src="/images/slider_img3.jpg" class="d-block w-100 img" alt="..." aria-hidden="true"/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-end text-dark">
          <h1>Best Machines</h1>
          <h5 className='opacity-75'>We’re dedicated to providing quality health care for everyone.</h5>
          <h6 className='opacity-75'>~By Heath Clinic</h6>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img height="550px" src="/images/slider_img4.jpg" class="d-block w-100 img" alt="..." aria-hidden="true"/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-start">
          <h1>Health Clinic</h1>
          <h5 className='opacity-75'>We’re here to help you feel alive.</h5>
          <h6 className='opacity-75'>~By Heath Clinic</h6>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img height="550px" src="/images/slider_img5.jpg" class="d-block w-100 img" alt="..." aria-hidden="true"/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-dark">
          <h1>Best Doctors</h1>
          <h5 className='opacity-75'>Our team is committed to providing excellent care for you and your family.</h5>
          <h6 className='opacity-75'>~By Heath Clinic</h6>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Imageslider;