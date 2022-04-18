import React from 'react'

function Benefit() {
  return (
    <div className="container py-4 py-xl-5">
        <div className="row" style={{paddingTop: '48px'}}>
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h3 className="fw-bold">Benefit Panen Sampah</h3>
                <p className="text-muted w-lg-50">Dapatkan berbagai kemudahan dan kuntungan dalam mendaur ulang sampah plastik!&nbsp;</p>
            </div>
        </div>
        
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{margin: '0px -12px 0px', paddingTop: '48px', paddingBottom: '48px'}}>
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-thermometer">
                            <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                            <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"></path>
                        </svg>
                    </div>
                    <div className="px-3">
                        <h4>Melawan Perubahan Iklim</h4>
                        <p>Setiap sampah wadah skincare-mu dapat dipastikan terdaur ulang dengan bertanggung jawab dalam rangka mengurangi produksi plastik yang membahayakan iklim.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-recycle">
                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"></path>
                    </svg></div>
                    <div className="px-3">
                        <h4>Praktis dan Mudah</h4>
                        <p>Daur ulang sampah plastik skincare jadi lebih menyenangkan, menguntungkan, dan tidak merepotkan.</p> 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-graph-up">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"></path>
                    </svg></div>
                    <div className="px-3">
                        <h4>Meningkatkan Kesejahteraan</h4>
                        <p>Tabungan sampah kamu menjadi income tambahan kamu atau kamu investasikan menjadi emas.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit