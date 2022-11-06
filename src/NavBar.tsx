import OrangeLink from "./components/OrangeLink";

const NavBar = () => {
  const style = {
    position: "absolute" as "absolute",
    left: "0px",
    width: "250px",
    border: "solid #D64078 3px",
  };

  return (
    <nav style={style}>
      <ul>
        <li>
          <OrangeLink to="/">home</OrangeLink>
        </li>
        <li>
          <OrangeLink to="employees-list">employee list</OrangeLink>
        </li>
        <li>
          <OrangeLink to="layout-demo">layout demo</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/contact">contact</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/contact2">contact2</OrangeLink>
        </li>
        <li>
          <OrangeLink to="/itunes-albums">itunes albums</OrangeLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
