import React from "react";
import ClickCounter from "../components/ClickCounter";
import OrangeLink from "../components/OrangeLink";

function HomePage() {
  return (
    <div className="App">
      <p>
        <OrangeLink to="employees-list">Employee-List</OrangeLink>
      </p>
      <ClickCounter />
    </div>
  );
}

export default HomePage;
