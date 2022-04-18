import React from 'react'
import { Link } from 'react-router-dom'

function Highlight() {
  return (
    <section className="highlight">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xl-7">
                    <div className="intro">
                        <h1>Turn your trash into gold</h1>
                        <p>Invest with plastic to fight climate change</p>
                        <Link to="/shop"><a className="btn btn-primary shadow ms-2" role="button">Yuk Invest!</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlight