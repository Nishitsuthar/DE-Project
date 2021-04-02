import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
