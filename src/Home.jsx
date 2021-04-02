import React from "react";
import web from "../src/images/home_page.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        title="Banking is Necessary Banks are Not.. "
        heading="Silver Bank"
        subtitle="We Understand your need We can help you"
        btn="Get Started"
        visit="/service"
        img={web}
      />
    </>
  );
};

export default Home;
