function ListGroup() {
  let items = ["New York", "Delhi", "Karachi", "Paris", "London"];

  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items Not Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
