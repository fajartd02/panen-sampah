import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import jwt_decode from "jwt-decode";
import Footer from "../Footer";

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
    if(response2.data.emas === null) {
        response2.data.emas = 0;
    }
    setUser(response2.data);
  };

  const viewStatus = async() => {
        const res = await axios.get("http://localhost:5000/token");
        const decoded: User = jwt_decode(res.data.accessToken);
        const { userId } = decoded;

        const response = await axios.get('http://localhost:5000/carts');
        const { data } = response;
        const itemArray: any = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].buyer_id === userId) {
                itemArray.push(data[i]);
            } else {
                continue;
            }
        }
        setStatusItem(itemArray);
  }

  useEffect(() => {
    getUserInfo();
    viewStatus();
  }, []);
  const img_emas = "assets/img/emas.jpg";
  const img_sampah = "assets/img/sampah_money.png";
  return (
    <>
      <Navbar username={username} />
      <div className="jumbotron text-center bg-white mt-5">
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
            
      </div>
      <div style={{ marginBottom: "10%" }}></div>
      <Footer />
    </>
  );
}

export default Profile;
