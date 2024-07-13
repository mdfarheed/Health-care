import '../Appointment_css/appointment_intro.css';
const Appointment_intro=()=>{
    return(
        <>
        <div className="container-fluid back_img_intro">
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center"  >
    <div class="col-md-6 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold text-white">Best Doctors For You</h1>
      <h3 class="fw-normal mb-3 text-white">Book Appointment For Best Doctors</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-capsule text-white" viewBox="0 0 16 16">
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  </div>
        </>
    )
}
export default Appointment_intro;