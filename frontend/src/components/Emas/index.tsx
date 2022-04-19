import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface EmasInterface {
  username?: string;
}
interface User {
  userId: number;
  name: string;
  email: string;
  exp: any;
}

function Emas(props: EmasInterface) {
  const { username } = props;
  const img_emas = "assets/img/emas.jpg";
  const [user, setUser] = useState({
    name: "",
    email: "",
    money: 0,
    emas: 0,
  });
  const [countEmas, setCountEmas] = useState(0);
  const [error, setError] = useState('');
  const nav = useNavigate();

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

  const minusEmas = () => {
      if(countEmas === 0) {
          setCountEmas(0);
      } else {
          setCountEmas(countEmas - 1);
      }
  }

  const submitEmas = async () => {
    const totalHarga = countEmas * 40000;
    if(user.money < totalHarga) {
        setError('Uang anda tidak cukup!');
        return;
    } 
    try {
        await axios.post('http://localhost:5000/emas', {
            total: countEmas
        });

        nav('/successcheckout');
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <>
      <Navbar username={username} />
      <div className="container">
        <div className="row">
          <div
            className="col-6 d-flex justify-content-end"
            style={{ marginTop: "5%" }}
          >
            <div className="card border" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img_emas} alt="foto emas" />
              <div className="card-body">
                <h5 className="card-title">Tukar Emas</h5>
                <p className="card-text">Rp40.000 = 0.025gram emas</p>
                <h5 style={{ marginTop: "10%", marginBottom: "10%" }}>
                  Tukar x{countEmas} unit
                </h5>
                <button
                  className="btn btn-primary"
                  onClick={(e) => setCountEmas(countEmas + 1)}
                  style={{marginRight: '40%'}}
                >
                  +
                </button>
                <button className="btn btn-secondary" onClick={minusEmas}>
                  -
                </button>
              </div>
                <button onClick={submitEmas} className="btn btn-primary">
                  Tukar Emas
                </button>
              </div>
          </div>
          <div className="col-4 " style={{ marginTop: "15%" }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Uang anda saat ini</h5>
              <p className="card-text text-info fw-bold">Rp{user.money}</p>
              <p className="card-text text-danger fw-bold">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emas;
