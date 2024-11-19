import ListGroup from "./componenets/ListGroup";

function App() {
  let items = ["New York", "Delhi", "Karachi", "Paris", "London", "Austria"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
