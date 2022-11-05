import React from "react";
import Clock from "../components/Clock";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import ClickCounter from "../components/ClickCounter";

const Page = () => {
  const sectionStyle = {
    marginLeft: "250px",
    border: "solid #FDC72F 3px",
  };

  const headerStyle = {
    ...sectionStyle,
    textAlign: "center" as "center",
  };

  return (
    <div id="page">
      <NavBar />
      <header style={headerStyle}>
        ZDFRONpol12 (<Clock />)
        <ClickCounter />
      </header>
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </div>
  );
};

export default Page;
