import Appointmentprofile from "../doctors_profile/appointmentprofile";
import Horizontal_line from "../Components/horizontal_line";
import Footer from "../header_footer/footer";
import Header from "../header_footer/header";
import Logo_header from "../header_footer/logo_header";
import Scroll_Counter from "../common_files/scroll_counter";
import Doctor_profile_5 from "../doctors_profile/doctor_profile_5";

const Doctor_Profile_Page_5=()=>{
    return(
        <>
        {<Logo_header/>}
        {<Header/>}
        {<Doctor_profile_5/>}
        {<Appointmentprofile/>}
        {<Horizontal_line/>}
        {<Scroll_Counter/>}
        {<Footer/>}
        </>
    )
}
export default Doctor_Profile_Page_5;