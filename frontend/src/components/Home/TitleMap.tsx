import React from 'react'
import Map from '../Map/Map'
import MapBox from '../Map/MapBox'

function TitleMap() {
  return (
    <section className="py-5 mt-5" style={{marginTop: '0px !important'}}>
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 className="fw-bold"><strong>Mana yang paling dekat denganmu!</strong></h2>
                    <p className="text-muted w-lg-50">Lokasi mitra bank sampah kami tersebar di berbagai daerah.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
                <div className="col-xxl-12 mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <MapBox height='60vh' width='60vw'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TitleMap