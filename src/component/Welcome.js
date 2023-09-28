import React from "react";
import Particle from "./Particle";

const Welcome = () => {
  return (
    <div>
      <div className="container-fluid banner1">
        <div className="row">
          <Particle/>
          <div className="col-md-10">
            <h1 data-aos="fade-down"  style={{ color: "white", marginTop: "26%",padding:"6%" }}>
              WELCOME TO I RENT COMUNITY!<br />
              WE BELIEVE IN CIRCULAR ECONOMY <br />
              WHAT DOES NOT WORK FOR YOU,
              <br />
              CAN BE USEFUL FOR SOMEONE ELSE! <br />
              OUR MISSION IS TO MAKE MONEY OUT OF IT!
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Welcome;
