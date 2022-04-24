function Notes() {
  const text = "vegetables for cooking";
  return (
    <>
      <input type="text" value={text} />;<button className="btn">Submit</button>
    </>
  );
}

export default Notes;
