import Button from "./componenets/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
