import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import PersonComponent from "./components/PersonComponent";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Greet name="Abhishek" loggedIn={false} />
      <PersonComponent name={personName} />
      <PersonList names={nameList}/>
      <Status status="Loading" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
