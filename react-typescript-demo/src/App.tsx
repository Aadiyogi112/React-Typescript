import "./App.css";
import Greet from "./components/Greet";
import PersonComponent from "./components/PersonComponent";
import PersonList from "./components/PersonList";

function App() {
  const nameList = [
    {
      first: "Abhishek",
      last: "Baghel",
    },
    {
      first: "Abhishek2",
      last: "Baghel",
    },
    {
      first: "Abhishek3",
      last: "Baghel",
    },
  ];
  const personName = {
    first: "Abhishek",
    last: "Baghel",
  };
  return (
    <div className="App">
      <Greet name="Abhishek" messageCount={101} loggedIn={true} />
      <PersonComponent name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
