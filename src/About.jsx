import React from "react";
import Common from "./Common";
import web from "../src/images/about_page.jpg";

const About = () => {
  return (
    <>
      <Common
        title="This is Our First StartUp"
        subtitle="You Can Direct Ping Us"
        heading="We are growing Community"
        btn="Conatact Us"
        visit="/contact"
        img={web}
      />
    </>
  );
};

export default About;
