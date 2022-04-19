import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface SuccessCheckoutInterface {
  username?: string;
}

function SuccessCheckout(props: SuccessCheckoutInterface) {
  const { username } = props;
  return (
    <>
      <Navbar username={username} />
      <div className="jumbotron text-center bg-white mt-5">
        <h1 className="display-4">Hello, {username}!</h1>
        <p className="lead">Barang anda berhasil dicheckout dengan aman!</p>
        <hr className="my-4" />
        <p>Silahkan lihat status anda melalu tombol dibawah ini</p>
        <p className="lead">
          <Link to="/profile">
            <button className="btn btn-primary btn-lg">Lihat Profile</button>
          </Link>
        </p>
      </div>

      <div style={{ marginBottom: "5%" }}></div>
      <Footer />
    </>
  );
}

export default SuccessCheckout;
