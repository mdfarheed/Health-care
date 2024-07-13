import { useNavigate } from "react-router-dom";

const Doctorprofilecard=()=>{
    const navigate=useNavigate();
    return(
        <>
        <section class="team-wrap ptb-100">
                    <div class="container">
                        <div class="row justify-content-center py-4">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-2.jpg"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Fedrick Bonita</h3>
                                        <p class="text-center">Othopedic Surgeon</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment1')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-1.jpg"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Carson</h3>
                                        <p class="text-center">Anesthesiologist</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment2')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-3.png"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. William Anderson</h3>
                                        <p class="text-center">Cardiology</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment3')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-4.png"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Flip Badcon</h3>
                                        <p class="text-center">Surgeon</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment4')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-5.png"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Mark Jhones</h3>
                                        <p class="text-center">Dentist</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment5')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-6.jpg"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Lily Bonita</h3>
                                        <p class="text-center">Urologist</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment6')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-7.png"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Nancy Bonita</h3>
                                        <p class="text-center">ENT Specialis</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment7')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team-8.jpg"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Amanda Jepson</h3>
                                        <p class="text-center">Neurosurgeon</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment8')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 pt-4">
                                <div class="card style2 shadow">
                                <img src="/images/team9.jpg"class="card-img" alt="Image" width="100" height="380px"/>
                                    <div class="team-info p-2 d-grid ">
                                        <h3 class="text-center">Dr. Sarah Jhonson</h3>
                                        <p class="text-center">Rheumatologist</p>
                                        <button class="btn btn-primary btn-center" onClick={()=>{navigate('/bookappointment9')}}>Appointment</button>
                                    </div>
                                </div>
                            </div>
                            


                        </div>
                    </div>
                </section>
        </>
    )
}
export default Doctorprofilecard;