// import Card from "../shared/Card";

function Category() {
  const selector1 = <div className="list">grocery</div>;
  const selector2 = <div className="list">travelling</div>;
  const selector3 = <div className="list">health</div>;
  const selector4 = <div className="list">shopping</div>;
  const selector5 = <div className="list">electronics</div>;
  const selector6 = <div className="list">materials</div>;
  const selextor7 = <div className="list">others</div>;

  return (
    <div className="category">
      {selector1}
      {selector2}
      {selector3}
      {selector4}
      {selector5}
      {selector6}
      {selextor7}
    </div>
  );
}

export default Category;
