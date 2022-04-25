function Display({ date, amt, note }) {
  return (
    <div className="display">
      <div className="dis-date">{date}</div>
      <div className="dis-amt">{amt}</div>
      <div className="dis-note">{note}</div>
    </div>
  );
}
export default Display;
