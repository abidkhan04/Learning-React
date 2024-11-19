import ListGroup from "./componenets/ListGroup";

function App() {
  let items = ["New York", "Delhi", "Karachi", "Paris", "London", "Austria"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectitem={handleSelectitem}
      />
    </div>
  );
}

export default App;
