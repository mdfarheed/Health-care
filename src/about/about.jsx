import '../about_css/about.css';
const About=()=>{
    return(
        <>
        <main>

<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
    <img height="550px" src="/images/about_slider1.jpg" class="d-block w-100 img" alt="..."/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
    </div>
    <div class="carousel-item">
    <img height="550px" src="/images/about_slider2.jpg" class="d-block w-100 img" alt="..."/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
    </div>
    <div class="carousel-item active">
    <img height="550px" src="/images/about_slider3.png" class="d-block w-100 img" alt="..."/>
      {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <div class="container">
        <div class="carousel-caption text-end text-dark about_slider_text3 text-muted">
          <h1>Fast, friendly and accurate<h1>care for you.</h1></h1>
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


{/* <!-- Marketing messaging and featurettes */}
{/* ================================================== --> */}
{/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

<div class="container marketing">

  {/* <!-- Three columns of text below the carousel --> */}
  <div class="row pt-5 pb-4">
    <div class="col-lg-4 text-center">
    <img src="/images/chairman_img1.jpg" class="rounded-circle w-50 h-50" alt="..."/>
      {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <h2 class="fw-normal">Founder</h2>
      <p className="px-4">Dr. Cane Wood, Founder of the Health Clinic Group, is the visionary architect of modern Indian healthcare. </p>
      <p className='badge text-bg-primary'>Founder of Health Clinic</p>
    </div>
    {/* <!-- /.col-lg-4 --> */}
    <div class="col-lg-4 text-center">
    <img src="/images/chairmain_img3.jpg" class="rounded-circle w-50 h-50" alt="..."/>
      {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <h2 class="fw-normal">Chairman</h2>
      <p className="px-4">Dr. Nancy star, Chiarman of the Health Clinic Group, is the visionary architect of modern Indian healthcare.</p>
      <p className='badge text-bg-primary'>Chairman of Health Clinic</p>
    </div>
    {/* <!-- /.col-lg-4 --> */}
    <div class="col-lg-4 text-center">
    <img src="/images/chairman_img2.jpg" class="rounded-circle w-50 h-50" alt="..."/>
      {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
      <h2 class="fw-normal">Chairman</h2>
      <p className="px-4">Dr. Harry Mark, Chairman of the Health Clinic Group, is the visionary architect of modern Indian healthcare.</p>
      <p className='badge text-bg-primary'>Chairman of Health Clinic</p>
    </div>
    {/* <!-- /.col-lg-4 --> */}
  </div>
  {/* <!-- /.row --> */}


  {/* <!-- START THE FEATURETTES --> */}

  <hr class="featurette-divider"/>

  <div class="row featurette py-5">
    <div class="col-md-6 about_text_">
      <h2 class="featurette-heading fw-normal lh-1 about_heading_">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
      <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
    </div>
    <div class="col-md-6">
    <img src="/images/about_bad_room.avif" className="img-fluid rounded mx-auto" alt=""/>
      {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette py-5">
    <div class="col-md-6 col-sm-12 order-md-2 about_text_middle">
      <h2 class="featurette-heading fw-normal lh-1 about_heading_">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
      <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
    </div>
    <div class="col-md-6 col-sm-12 order-md-1">
    <img src="/images/about_opration.jpg" className="img-fluid rounded mx-auto" alt=""/>
      {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette py-5">
    <div class="col-md-6 col-sm-12 about_text_">
      <h2 class="featurette-heading fw-normal lh-1 about_heading_">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
      <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
    </div>
    <div class="col-md-6 col-sm-12">
    <img src="/images/about_counter.jpg" className="img-fluid rounded mx-auto" alt=""/>
      {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
    </div>
  </div>

  <hr class="featurette-divider"/>
</div>
</main>
        </>
    )
}
export default About;