import React from "react";
import Clock from "../components/Clock";

interface PageProps {
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <div id="page">
      <header className="header">
        ZDFRONpol12 <Clock />
      </header>
      <div className="headerSpacer"></div>
      {props.children}
      <footer className="footer">Goodbye</footer>
    </div>
  );
};

export default Page;
