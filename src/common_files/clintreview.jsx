import "../common_files_css/clintreview.css";
import ScrollAnimation from 'react-animate-on-scroll';
const Clintreview = () => {
  return (
    <>
    <ScrollAnimation animateIn="fadeIn">
    <div class="site-section  p-3">
        <div class="container-fluid ">
          <div class="row mt-3">
            <div class="col-lg-7 mx-auto text-center mb-5 ">
              <span class="subheading">What Client Says</span>
              <h1 class="heading">
                <strong class="text-primary">Happy</strong> Patients
              </h1>
            </div>
          </div>
          <div class="row ">
          <div class="clint_padding col-lg-4">
              <div class="testimonial text-center bg-white p-4 rounded shadow">
                <img
                  src="/images/client_man.jpg"
                  class="img-fluid rounded-circle"
                  width="100"
                  height="100"
                  alt="..."
                />
                <blockquote class="pt-3">
                  <p class="quote" className="clint_para">
                  Wonderful experience with Health Clinic. Dr. A.P Singh was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a am so glad I chose Health Clinic and would highly recommend to anyone.
                  </p>
                  <cite class="author">
                    Elizabeth Anderson, Hostpital Patients
                  </cite>
                </blockquote>
              </div>
            </div>
            <div class="clint_padding col-lg-4">
              <div class="testimonial text-center bg-white p-4 rounded shadow">
                <img
                  src="/images/client_woman.jpeg"
                  class="img-fluid rounded-circle"
                  width="100"
                  height="100"
                  alt="..."
                />
                <blockquote class="pt-3">
                  <p class="quote" className="clint_para">
                  This practice is terrific. Dr. Mahesh Gupta combines expertise and a willingness to listen. She’s also an excellent surgeon. Also, the staff is very friendly and professional. I’ve never had to wait more than a few minutes when I arrive on time for an appointment.
                  </p>
                  <cite class="author">
                  Amana Wilson, Hostpital Patients
                  </cite>
                </blockquote>
              </div>
            </div>
            <div class="clint_padding col-lg-4">
              <div class="testimonial text-center bg-white p-4 rounded shadow">
                <img
                  src="/images/client_man2.jpg"
                  class="img-fluid rounded-circle"
                  width="100"
                  height="100"
                  alt="..."
                />
                <blockquote class="pt-3">
                  <p class="quote" className="clint_para">
                  Dr. Mukesh Jain was terrific. Knowledgeable, sensitive, informative… I immediately felt at ease – and felt confident in my receiving expert medical care. Staff was great, too. Walked away, very impressed w. the overall experience. HIGHLY recommend.
                  </p>
                  <cite class="author">
                  Mark Jeson, Hostpital Patients
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

</ScrollAnimation>
           </>
  )
}
export default Clintreview;
