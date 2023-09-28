import React from "react";
import Welcome from "../../component/Welcome";
import pic5 from "../../images/pic5.png";
import puzz2 from "../../images/puzz2.png";



const Home = () => {
  return (
    <div >
      <Welcome/>
      <div className="container-fluid ftbanner">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              color: "black",
              padding: "4%",
            }}
          >
            <img
              data-aos="fade-down"
              src={puzz2}
              alt="puzz2"
              style={{ width: "40%" }}
            />
            <h1>
              IRENT
              <br />{" "}
            </h1>
            <h2>
              {" "}
              NO MORE WASTING YOUR MONEY ON TEMPORARY ITEMS <br/>JOIN US AND BE USEFUL!
            </h2>
          </div>
          <div data-aos="fade-down" className="col-md-6">
            <img
              src={pic5}
              alt="picture"
              style={{ width: "90%", padding: "4%", paddingBottom: "0" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid ftbanner">
        <div className="row">
          <div className="col-md-4">
            <div className="lbox">
              {" "}
              <i className="fi fi-rs-user-add"></i>
              <p>
                Our main objective is to make the renting operation easier
                faster and available just by simple click through our
                websiteapplication.
                <br/>
                <br/>
                We are building a
                product to significantly improve the renting experience for
                agents, landlords and tenants alike.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="lbox">
              <i className="fi fi-rs-shopping-cart-add"></i>
              <p>
                By bringing together the core elements of the lettings process
                into one powerful online platform - and by integrating
                market-leading products and services into that journey at the
                optimal time.<br/>
                we are creating one easy-to-use platform that has
                the needs of the agent, landlord and tenant at the heart of the
                product.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="lbox">
              <i className="fi fi-rs-handshake"></i>
              <p>
                I-Rent team wish you a joyful experience. We are building a
                product to significantly improve the renting experience for
                agents, landlords and tenants alike.
                <br/>By registration, you are going to be able to
                add items that you want to rent or even rent other items that
                you are in need.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
