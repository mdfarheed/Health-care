import '../Css/home_second_info_img.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Home_Second_Info_Img=()=>{
    return(
        <>
        <ScrollAnimation animateIn="fadeIn">
        <div className="container-fluid my-5">
        <div class="row featurette">
      <div class="col-xl-6 col-lg-6 align-items-center d-flex flex-column p-5">
        <h2 class="featurette-heading fw-normal lh-1 heading_">Health is our priority. <span class="text-body-secondary">Heal early with us!</span></h2>
        <p class="lead">-You can neglect your health as much as you want, but be prepared for the consequences.</p>
      </div>
      <div class="col-xl-6 col-lg-6">
      <img src="/images/health_details_img.jpeg" className="img-fluid img_ rounded" alt=""/>
        {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
      </div>
    </div>
    </div>
</ScrollAnimation>
        </>
    )
}
export default Home_Second_Info_Img;