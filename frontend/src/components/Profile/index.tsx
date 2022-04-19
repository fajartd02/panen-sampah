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

type userObject = {
  name: string;
  email: string;
  money: number;
  emas: number;
};

function Profile(props: ProfileInterface) {
  const { username } = props;
  const [user, setUser] = useState({
    name: "",
    email: "",
    money: 0,
    emas: 0,
  });

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

  useEffect(() => {
    getUserInfo();
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
      <div style={{ marginBottom: "10%" }}></div>
      <Footer />
    </>
  );
}

export default Profile;
