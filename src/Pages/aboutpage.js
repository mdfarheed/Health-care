import About from "../about/about";
import Footer from "../header_footer/footer";
import Header from "../header_footer/header";
import Logo_header from "../header_footer/logo_header";

const Aboutpage=()=>{
    return(
        <>
        {<Logo_header/>}
        {<Header/>}
        {<About/>}
        {<Footer/>}
        </>
    )
}
export default Aboutpage;