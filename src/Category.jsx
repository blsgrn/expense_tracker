function Category() {
  const selector1 = <div>grocery</div>;
  const selector2 = <div>travelling</div>;
  const selector3 = <div>health</div>;
  const selector4 = <div>shopping</div>;
  const selector5 = <div>electronics</div>;
  const selector6 = <div>building material</div>;
  const selextor7 = <div>others</div>;

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
