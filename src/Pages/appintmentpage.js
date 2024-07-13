import Appointment from "../doctors_profile/doctor_profile_1";
import Clintreview from "../common_files/clintreview";
import Doctorstaff from "../common_files/welcome_about_us_link";
import Doctorprofilecard from "../Appointments/doctorprofilecard";
import Logo_header from "../header_footer/logo_header";
import Header from "../header_footer/header";
import Footer from "../header_footer/footer";
import Horizontal_line from "../Components/horizontal_line";
import Appointment_intro from "../Appointments/appointment_intro";
import Scroll_Counter from "../common_files/scroll_counter";
// import Doctorprofile from "../Components/doctorprofile";

const Appointmentpage=()=>{
    return(
        <>
        {<Logo_header/>}
        {<Header/>}
        {<Appointment_intro/>}
        {<Doctorprofilecard/>}
        {<Horizontal_line/>}
        {<Scroll_Counter/>} 
        {<Horizontal_line/>}
        {<Clintreview/>}
        {<Footer/>}
        </>
    )
}
export default Appointmentpage;