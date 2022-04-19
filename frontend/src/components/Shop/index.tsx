import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ShopInterface {
  username?: string;
}

function Shop(props: ShopInterface) {
  const { username } = props;
  const img_emas ="assets/img/emas.jpg";
  const img_sampah="assets/img/sampah_money.png"

  return (
    <>
      <Navbar username={username} />
      <div className="container" style={{ marginTop: "4%" }}>
      <h2 className="fw-bold text-center mb-5">Shop Area</h2>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <div className="card border" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img_sampah} alt="foto emas" />
              <div className="card-body">
                <h5 className="card-title">Tukar Sampah</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/sampah" style={{ color: "white" }}>
                  <a className="btn btn-primary">Tukar Sampah</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-center">
            <div className="card border" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img_emas} alt="foto emas" />
              <div className="card-body">
                <h5 className="card-title">Tukar Emas</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/emas" style={{ color: "white" }}>
                  <a className="btn btn-primary">Beli Emas</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div style={{marginBottom: '15%'}}>

    </div>

      <Footer />
    </>
  );
}

export default Shop;
