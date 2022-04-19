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

        navigate('/successcheckout');
      } catch(err) {
          console.log(err);
      }
  }

  return (
    <>
      <Navbar username={username} />
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                    <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-md-6 col-xl-12 mb-4">
                                    <div className="p-5">
                                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                                            <h3 className="fw-bold">Kirim sampahmu</h3>
                                            <p className="text-muted w-lg-50">Kirim sampahmu dengan mudah melalui Panen Sampah.&nbsp;</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src="assets/img/kaca.jpg" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <h6 className="text-muted">Skincare</h6>
                                                <h6 className="text-black mb-0">Kaca Skincare</h6>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2" onClick={minusKaca}>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input id="form1" min="0" name="quantity" value={countKaca}  className="form-control form-control-sm text-center" />
                                                <button className="btn btn-link px-2" onClick={(e) => setCountKaca(countKaca + 1)}>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 className="mb-0">kilogram</h6>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src="assets/img/kardus.jpg" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <h6 className="text-muted">Skincare</h6>
                                                <h6 className="text-black mb-0">Kardus Skincare</h6>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2" onClick={minusKardus}>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input id="form1" min="0" name="quantity" value={countKardus}  className="form-control form-control-sm text-center" />
                                                <button className="btn btn-link px-2" onClick={(e) => setCountKardus(countKardus + 1)}>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 className="mb-0">kilogram</h6>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src="assets/img/plastik.jpg" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <h6 className="text-muted">Skincare</h6>
                                                <h6 className="text-black mb-0">Plastik Skincare</h6>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2" onClick={minusPlastik}>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <input id="form1" min="0" name="quantity" value={countPlastik}  className="form-control form-control-sm text-center" />
                                                <button className="btn btn-link px-2" onClick={(e) => setCountPlastik(countPlastik + 1)}>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 className="mb-0">kilogram</h6>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      

      <div className="container" style={{ marginTop: "0%" }}>
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

{/* <div className="container" style={{ marginTop: "4%" }}>
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
      </div> */}

export default Sampah;
