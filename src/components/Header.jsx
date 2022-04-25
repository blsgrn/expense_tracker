// import Card from "../shared/Card";

function Header({ bgColor, textColor }) {
  const heading = "Expense Tracker";
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="header" style={headerStyles}>
      <div className="container">
        <h2>{heading}</h2>
      </div>
    </div>
  );
}

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#b2fab4",
};

export default Header;
