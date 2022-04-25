import Card from "../shared/Card";
function Notes() {
  const text = "vegetables for cooking";
  return (
    <div className="notes">
      <label>Notes </label>
      <input type="text" value={text} />
      <button className="btn">Submit</button>
    </div>
  );
}

export default Notes;
