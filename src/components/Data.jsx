function Data() {
  const Date = "May 13, 2022";
  const Amount = 2000;

  return (
    <div className="data">
      <input type={"date"} value={Date} />
      <input type={"number"} value={Amount} />
    </div>
  );
}

export default Data;
