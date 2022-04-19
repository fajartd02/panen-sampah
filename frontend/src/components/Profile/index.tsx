import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import jwt_decode from "jwt-decode";
import Footer from "../Footer";
import { Link } from "react-router-dom";

interface ProfileInterface {
  username?: string;
}

interface User {
  userId: number;
  name: string;
  email: string;
  exp: any;
}

function Profile(props: ProfileInterface) {
  const { username } = props;
  const [user, setUser] = useState({
    name: "",
    email: "",
    money: 0,
    emas: 0,
  });
  const [statusItem, setStatusItem] = useState([]);

  const getUserInfo = async () => {
    const response = await axios.get("http://localhost:5000/token");
    const decoded: User = jwt_decode(response.data.accessToken);
    const { userId } = decoded;

    const response2 = await axios.get("http://localhost:5000/users/" + userId);
    if (response2.data.emas === null) {
      response2.data.emas = 0;
    }
    setUser(response2.data);
  };

  const viewStatus = async () => {
    const res = await axios.get("http://localhost:5000/token");
    const decoded: User = jwt_decode(res.data.accessToken);
    const { userId } = decoded;

    const response = await axios.get("http://localhost:5000/carts");
    const { data } = response;
    const itemArray: any = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].buyer_id === userId) {
        itemArray.push(data[i]);
      } else {
        continue;
      }
    }
    setStatusItem(itemArray);
  };

  useEffect(() => {
    getUserInfo();
    viewStatus();
  }, []);
  const img_emas = "assets/img/emas.jpg";
  const img_sampah = "assets/img/sampah_money.png";
  return (
    <>
      <Navbar username={username} />
      <div className="container py-5 py-xl-5">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Halo, {username}</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-12 mb-4">
                <div className="card shadow border-start-primary py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 ml-3">
                          <span>Emas Anda</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0 ml-3">
                          <span>{user.emas} gram</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link to="/shop">
                          <button
                            className="btn btn-primary shadow btn-sm mr-3"
                            type="button"
                          >
                            Lebih lanjut
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-12 mb-4">
                <div className="card shadow border-start-primary py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 ml-3">
                          <span>Saldo</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0 ml-3">
                          <span>Rp {user.money},-</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button
                          className="btn btn-primary shadow btn-sm mr-3"
                          type="button"
                        >
                          Tukar tunai
                        </button>
                        <Link to="/shop">
                          <a
                            className="btn btn-primary shadow btn-sm mr-3 text-white"
                            type="button"
                          >
                            Tukar emas
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No Pemesanan</th>
                      <th scope="col">Kaca Skincare</th>
                      <th scope="col">Plastik Skincare</th>
                      <th scope="col">Kardus Skincare</th>
                      <th scope="col">Status Barang</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusItem.map((item: any) => (
                      <>
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.kaca} unit</td>
                          <td>{item.plastic} unit</td>
                          <td>{item.skincare} unit</td>
                          {item.status === "solved" ? (
                            <td
                              className="text-success"
                              style={{ fontWeight: "600" }}
                            >
                              Barang sudah sampai
                            </td>
                          ) : (
                            <td
                              className="text-warning"
                              style={{ fontWeight: "600" }}
                            >
                              Dalam perjalanan
                            </td>
                          )}
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-xl-4">
                <div className="row">
                  <div className="col">
                    <div
                      className="row"
                      style={{
                        paddingRight: "24px",
                        paddingLeft: "24px",
                        paddingBottom: "24px",
                      }}
                    >
                      <Link to="/sampah">
                        <button
                          className="btn btn-primary shadow btn-sm w-100"
                          type="button"
                        >
                          Kirim sampah
                        </button>
                      </Link>
                    </div>
                    <iframe
                      allowFullScreen={true}
                      src="https://cdn.bootstrapstudio.io/placeholders/map.html"
                      width="100%"
                      height="400"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "10%" }}></div>
      <Footer />
    </>
  );
}

{
  /* <div className="jumbotron text-center bg-white mt-5">
        <h1 className="display-4">Hello, {username}!</h1>
        <p className="lead">Email anda: {user.email}</p>
        <hr className="my-4" />
        <div className="container" style={{ marginTop: "0%" }}>
          <h2 className="fw-bold text-center mb-5">Status anda saat ini</h2>
          <div className="row">
            <div className="col-6 d-flex justify-content-end">
              <div className="card border" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={img_sampah}
                  alt="foto emas"
                />
                <div className="card-body">
                  <h5 className="card-title">Uang anda</h5>
                  <p className="card-text text-info fw-bold">
                    Rp{user.money}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-start">
              <div className="card border" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img_emas} alt="foto emas" />
                <div className="card-body">
                <h5 className="card-title">Emas anda</h5>
                  <p className="card-text text-info fw-bold">
                    {user.emas} gram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
          <table className="table">
              <thead>
                    <tr>
                        <th scope="col">No Pemesanan</th>
                        <th scope="col">Kaca Skincare</th>
                        <th scope="col">Plastik Skincare</th>
                        <th scope="col">Kardus Skincare</th>
                        <th scope="col">Status Barang</th>
                    </tr>
              </thead>
              <tbody>
              {statusItem.map((item: any) => (
                <>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.kaca} unit</td>
                        <td>{item.plastic} unit</td>
                        <td>{item.skincare} unit</td>
                        {item.status === 'solved'? <td>Barang sudah sampai</td> : <td>Sedang dalam perjalanan</td>}
                    </tr>
                </>
            ))}
              </tbody>
          </table>
            
      </div> */
}

export default Profile;
