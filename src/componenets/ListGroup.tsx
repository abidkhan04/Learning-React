import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Delhi",
    "Karachi",
    "Paris",
    "London",
    "Dera Ismail Khan",
  ];

  // Event Handler
  const handleclick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items Not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleclick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
