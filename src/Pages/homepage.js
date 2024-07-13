
import Clintreview from "../common_files/clintreview";
import Footer from "../header_footer/footer";
import Header from "../header_footer/header";
import Imageslider from "../Components/imageslider";
import Logo_header from "../header_footer/logo_header";
import Horizontal_line from "../Components/horizontal_line";
import Scroll_Counter from "../common_files/scroll_counter";
import Welcome_About_Us_Link from "../common_files/welcome_about_us_link";
import Disease_Card from "../Components/disease_card";
import Home_Second_Info_Img from "../Components/home_second_info_img";
 
 
const HomePage=()=>{
    return(
        <>
        {<Logo_header/>}
        {<Header/>}
        {<Imageslider/>}
        {<Welcome_About_Us_Link/>}
        {<Horizontal_line/>}
        {<Home_Second_Info_Img/>} 
        {<Horizontal_line/>}
        {<Disease_Card/>}
        {<Horizontal_line/>}
        {<Scroll_Counter/>} 
        {<Horizontal_line/>}
        {<Clintreview/>}
        {<Footer/>}
        </>
    )
}
export default HomePage;