import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ShopInterface {
  username?: string;
}

function Shop(props: ShopInterface) {
  const { username } = props;
  const img_emas = "assets/img/emas.jpg";
  const img_sampah = "assets/img/sampah_money.png";

  return (
    <>
      <Navbar username={username} />
      <div className="container py-4 py-xl-5">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Halo, {username}!</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-6 mb-4">
                <div className="card shadow border-start-primary py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 ml-3">
                          <span>Tabungan emas</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0 ml-3">
                          <span>Rp 40.000</span>
                        </div>
                        <p
                          className="text-muted w-lg-50 ml-3"
                          style={{ marginBottom: "0px", marginTop: "4px" }}
                        >
                          0.025 gram&nbsp;
                        </p>
                      </div>
                      <div className="col-auto">
                        <Link to="/emas">
                          <button
                            className="btn btn-primary shadow btn-sm mr-3"
                            type="button"
                          >
                            Beli emas
                          </button>
                        </Link>

                        <button
                          className="btn btn-primary shadow btn-sm mr-3"
                          type="button"
                        >
                          Jual emas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-start-primary py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 ml-3">
                          <span>Harga beli saat ini</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0 ml-3">
                          <span>Rp 946.467</span>
                        </div>
                        <p
                          className="text-muted w-lg-50 ml-3"
                          style={{ marginBottom: "0px", marginTop: "4px" }}
                        >
                          per gram&nbsp;
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-coins fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-start-primary py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 ml-3">
                          <span>Harga jual saat ini</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0 ml-3">
                          <span>Rp 918.072</span>
                        </div>
                        <p
                          className="text-muted w-lg-50 ml-3"
                          style={{ marginBottom: "0px", marginTop: "4px" }}
                        >
                          per gram&nbsp;
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-coins fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-xl-12">
                <div className="card shadow mb-4">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="text-primary fw-bold m-0">
                      Grafik harga emas per gram
                    </h6>
                    <div className="dropdown no-arrow">
                      <button
                        className="btn btn-link btn-sm dropdown-toggle"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        type="button"
                      >
                        <i className="fas fa-ellipsis-v text-gray-400"></i>
                      </button>
                      <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                        <a className="dropdown-item" href="#">
                          &nbsp;Harga beli
                        </a>
                        <a className="dropdown-item" href="#">
                          &nbsp;Harga jual
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-5">
                    <div className="chart-area">
                      <canvas data-bss-chart='{"type":"line","data":{"labels":["19 Jan","28 Jan","09 Feb","18 Feb","28 Feb","09 Mar","18 Mar","29 Mar"],"datasets":[{"label":"","fill":true,"data":["838000","832000","842000","868000","877000","939000","885000","876000"],"backgroundColor":"rgba(78, 115, 223, 0.05)","borderColor":"rgba(78, 115, 223, 1)"}]},"options":{"maintainAspectRatio":false,"legend":{"display":false,"labels":{"fontStyle":"normal"}},"title":{"fontStyle":"normal"},"scales":{"xAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"],"drawOnChartArea":false},"ticks":{"fontColor":"#858796","fontStyle":"normal","padding":20}}],"yAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"]},"ticks":{"fontColor":"#858796","fontStyle":"normal","padding":20}}]}}}'></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

{
  /* <div className="container" style={{ marginTop: "4%" }}>
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
      </div> */
}
export default Shop;
