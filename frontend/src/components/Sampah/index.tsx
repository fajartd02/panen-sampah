import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface SampahInterface {
  username?: string;
}

function Sampah(props: SampahInterface) {
  const [countKaca, setCountKaca] = useState(0);
  const [countPlastik, setCountPlastik] = useState(0);
  const [countKardus, setCountKardus] = useState(0);
  const [gojek, setGojek] = useState("");
  const [cepat, setCepat] = useState("");
  const navigate = useNavigate();

  const { username } = props;

  const minusKaca = () => {
    if (countKaca === 0) {
      setCountKaca(0);
    } else {
      setCountKaca(countKaca - 1);
    }
  };

  const minusPlastik = () => {
    if (countPlastik === 0) {
      setCountPlastik(0);
    } else {
      setCountPlastik(countPlastik - 1);
    }
  };

  const minusKardus = () => {
    if (countKardus === 0) {
      setCountKardus(0);
    } else {
      setCountKardus(countKardus - 1);
    }
  };

  const handleGojek = () => {
    setGojek("Sudah dipilih!");
    setCepat("");
  };

  const handleCepat = () => {
    setCepat("Sudah dipilih!");
    setGojek("");
  };

  const checkoutBaranng = async() => {
      try {
        await axios.post('http://localhost:5000/carts/add', {
            plastic: countPlastik,
            skincare: countKardus,
            kaca: countKaca
        });

        navigate('/success');
      } catch(err) {
          console.log(err);
      }
  }

  return (
    <>
      <Navbar username={username} />
      <div className="container" style={{ marginTop: "4%" }}>
        <h2 className="fw-bold text-center mb-5">Tuker sampah anda!</h2>
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <div className="card border" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="assets/img/skincare.jpg"
                alt="foto"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Kaca Skincare</h5>
                <p className="card-text">Rp10.000 / unit</p>
                <h5 style={{ marginTop: "10%", marginBottom: "10%" }}>
                  Tukar Kaca x{countKaca} unit
                </h5>
                <button
                  className="btn btn-primary mr-5"
                  onClick={(e) => setCountKaca(countKaca + 1)}
                >
                  +
                </button>
                <button className="btn btn-secondary" onClick={minusKaca}>
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div className="card border" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="assets/img/skincare.jpg"
                alt="foto"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Plastik Skincare</h5>
                <p className="card-text">Rp5.000 / unit</p>
                <h5 style={{ marginTop: "10%", marginBottom: "10%" }}>
                  Tukar Plastik x{countPlastik} unit
                </h5>
                <button
                  className="btn btn-primary mr-5"
                  onClick={(e) => setCountPlastik(countPlastik + 1)}
                >
                  +
                </button>
                <button className="btn btn-secondary" onClick={minusPlastik}>
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div className="card border" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="assets/img/skincare.jpg"
                alt="foto"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Kardus Skincare</h5>
                <p className="card-text">Rp15.000 / unit</p>
                <h5 style={{ marginTop: "10%", marginBottom: "10%" }}>
                  Tukar Kardus x{countKardus} unit
                </h5>
                <button
                  className="btn btn-primary mr-5"
                  onClick={(e) => setCountKardus(countKardus + 1)}
                >
                  +
                </button>
                <button className="btn btn-secondary" onClick={minusKardus}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5%" }}>
        <h2 className="fw-bold text-center mb-5">
          Silahkan pilih courier anda!
        </h2>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title fw-bold">Gojek</h2>
                <h5 className="card-title">
                  Akan kami antarkan barang anda sampai tujuan dengan selamat!
                </h5>
                <p className="card-text text-info">
                  Alamat anda: Jl. Asia Afrika No.49, Braga, Kec. Sumur Bandung,
                  <br />
                  Kota Bandung, Jawa Barat 40111
                </p>
                <p>Harga kurir: Rp10.000</p>
                <p className="text-success fw-bold">{gojek}</p>
                <button className="btn btn-primary" onClick={handleGojek}>
                  Pilih
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title fw-bold">SiCepat</h2>
                <h5 className="card-text">
                  Mari kami bawakan barang anda dengan secepat kilat!
                  menggunakan SiCepat
                </h5>
                <p className="card-text text-info">
                  Alamat anda: Jl. Asia Afrika No.49, Braga, Kec. Sumur Bandung,
                  <br />
                  Kota Bandung, Jawa Barat 40111
                </p>
                <p>Harga kurir: Rp10.000</p>
                <p className="text-success fw-bold">{cepat}</p>
                <button className="btn btn-primary" onClick={handleCepat}>
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <h2 className="fw-bold text-center mb-5" style={{marginTop: '10%'}}>
          Checkout barang anda!
        </h2>
          <button className="btn btn-primary" onClick={checkoutBaranng}>
            Checkout
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "15%" }}></div>

      <Footer />
    </>
  );
}

export default Sampah;
