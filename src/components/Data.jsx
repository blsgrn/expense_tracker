import Card from "../shared/Card";
function Data() {
  const Date = "May 13, 2022";
  const Amount = 2000;

  return (
    <>
      <Card>
        <div className="data">
          <div className="date">
            <form>
              <label htmlFor="date">Date </label>
              <input type="date" value={Date} />
            </form>
          </div>

          <div className="amount">
            <form>
              <label htmlFor="amount">Amount </label>
              <input type="amount" value={Amount} />
            </form>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Data;
