import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Delhi", "Karachi", "Paris", "London", "Austria"];

  const [selectedindex, setselectedindex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items Not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
