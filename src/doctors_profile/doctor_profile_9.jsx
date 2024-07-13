import '../doctors_profile_css/dectors_all_profiles.css';
const Doctor_profile_9=()=>{
    return(
        <>

         <div class="container-fluid dept_main_info white-bg">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane p-2 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                         <div class="row">
                            <div class="col-12 mt-2 shadow">
                        <div class="row">
                            <div class="col-5 p-1">
                                <div class="dept_thumb">
                                    <img src="/images/team9.jpg" alt="" className='app_img'/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="dept_info m-2">
                                    <h3 class="border-bottom border-success border-2 p-1">Dr. Fedrick Bonita</h3>
                                    <p class="p-1 rounded border border-opacity-25 border-warning bg-primary bg-opacity-10 text-justify">Cardiac Sciences | Adult CTVS (Cardiothoracic and Vascular Surgery) | Heart Transplant</p>
                                    <p class="p-1 border rounded border-opacity-25 border-warning bg-primary bg-opacity-10 text-justify">Thoracic Surgery | Thoracic Surgery</p>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee pb-1" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                                    </svg>
                                    <span className='rate'>1200</span>

                                    <span class="ms-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt-fill text-primary pb-1" className='loc' viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    Noida
                                    </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                  </div>
                  </div>
        </>
    )
}
export default Doctor_profile_9;