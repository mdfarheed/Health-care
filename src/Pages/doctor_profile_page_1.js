import Appointmentprofile from "../doctors_profile/appointmentprofile";
import Horizontal_line from "../Components/horizontal_line";
import Footer from "../header_footer/footer";
import Header from "../header_footer/header";
import Logo_header from "../header_footer/logo_header";
import Doctor_profile_1 from "../doctors_profile/doctor_profile_1";
import Scroll_Counter from "../common_files/scroll_counter";

const Doctor_Profile_Page_1=()=>{
    return(
        <>
        {<Logo_header/>}
        {<Header/>}
        {<Doctor_profile_1/>}
        {<Appointmentprofile/>}
        {<Horizontal_line/>}
        {<Scroll_Counter/>}
        {<Footer/>}
        </>
    )
}
export default Doctor_Profile_Page_1;