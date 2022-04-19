import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ServiceSectionInterface {
  username?: string;
}

function ServiceSection(props: ServiceSectionInterface) {
  const { username } = props;

  return (
    <>
      <Navbar username={username} />
      <section className="py-5 mt-5" style={{ marginTop: "0px !important" }}>
        <div className="container py-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h3 className="fw-bold">Our Services</h3>
              <p className="text-muted w-lg-50">
                What we can do for you.&nbsp;
              </p>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="col mb-5"
              style={{
                maxWidth: "900px",
                paddingRight: "24px",
                paddingLeft: "24px",
              }}
            >
              <img
                className="rounded img-fluid shadow"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">
                  Liat lokasi bank sampah terdekat&nbsp;
                </h5>
                <p className="text-muted mb-4">
                  Erat netus est hendrerit, nullam et quis ad cras porttitor
                  iaculis. Bibendum vulputate cras aenean.
                </p>
                <button className="btn btn-primary shadow" type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="col order-md-last mb-5"
              style={{ paddingRight: "24px", paddingLeft: "24px" }}
            >
              <img
                className="rounded img-fluid shadow"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">Kirim sampah&nbsp;</h5>
                <p className="text-muted mb-4">
                  Erat netus est hendrerit, nullam et quis ad cras porttitor
                  iaculis. Bibendum vulputate cras aenean.
                </p>
                <button className="btn btn-primary shadow" type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="col mb-5"
              style={{ paddingRight: "24px", paddingLeft: "24px" }}
            >
              <img
                className="rounded img-fluid shadow"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">Lihat saldo tabungant&nbsp;</h5>
                <p className="text-muted mb-4">
                  Erat netus est hendrerit, nullam et quis ad cras porttitor
                  iaculis. Bibendum vulputate cras aenean.
                </p>
                <button className="btn btn-primary shadow" type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="col order-md-last mb-5"
              style={{ paddingRight: "24px", paddingLeft: "24px" }}
            >
              <img
                className="rounded img-fluid shadow"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">Tarik saldo&nbsp;</h5>
                <p className="text-muted mb-4">
                  Erat netus est hendrerit, nullam et quis ad cras porttitor
                  iaculis. Bibendum vulputate cras aenean.
                </p>
                <button className="btn btn-primary shadow" type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div
              className="col mb-5"
              style={{ paddingRight: "24px", paddingLeft: "24px" }}
            >
              <img
                className="rounded img-fluid shadow"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
            </div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div>
                <h5 className="fw-bold">Tukar dengan emas&nbsp;</h5>
                <p className="text-muted mb-4">
                  Erat netus est hendrerit, nullam et quis ad cras porttitor
                  iaculis. Bibendum vulputate cras aenean.
                </p>
                <button className="btn btn-primary shadow" type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ServiceSection;
