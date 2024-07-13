import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from './Pages/aboutpage';
import HomePage from './Pages/homepage';
import Appointmentpage from "./Pages/appintmentpage";
import Doctor_Profile_Page_1 from "./Pages/doctor_profile_page_1";
import Doctor_Profile_Page_2 from "./Pages/doctor_profile_page_2";
import Doctor_Profile_Page_3 from "./Pages/doctor_profile_page_3";
import Doctor_Profile_Page_4 from "./Pages/doctor_profile_page_4";
import Doctor_Profile_Page_5 from "./Pages/doctor_profile_page_5";
import Doctor_Profile_Page_6 from "./Pages/doctor_profile_page_6";
import Doctor_Profile_Page_7 from "./Pages/doctor_profile_page_7";
import Doctor_Profile_Page_8 from "./Pages/doctor_profile_page_8";
import Doctor_Profile_Page_9 from "./Pages/doctor_profile_page_9";

function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/appointment' element={<Appointmentpage/>} />

      <Route path='/bookappointment1' element={<Doctor_Profile_Page_1/>}/>
      <Route path='/bookappointment2' element={<Doctor_Profile_Page_2/>}/>
      <Route path='/bookappointment3' element={<Doctor_Profile_Page_3/>}/>
      <Route path='/bookappointment4' element={<Doctor_Profile_Page_4/>}/>
      <Route path='/bookappointment5' element={<Doctor_Profile_Page_5/>}/>
      <Route path='/bookappointment6' element={<Doctor_Profile_Page_6/>}/>
      <Route path='/bookappointment7' element={<Doctor_Profile_Page_7/>}/>
      <Route path='/bookappointment8' element={<Doctor_Profile_Page_8/>}/>
      <Route path='/bookappointment9' element={<Doctor_Profile_Page_9/>}/>
      </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
