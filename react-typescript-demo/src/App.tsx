import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import PersonComponent from "./components/PersonComponent";
import PersonList from "./components/PersonList";
import LoginComponent from "./components/state/Login";
import User from "./components/state/User";
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
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;

// <Greet name="Abhishek" loggedIn={false} />
//       <PersonComponent name={personName} />
//       <PersonList names={nameList} />
//       <Status status="Loading" />
//       <Heading>PlaceHolder Text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Leonardo Dicaprio</Heading>
//       </Oscar>
//       <Button handleClick={(event, id) => console.log("Clicked", event, id)} />
//       <Input value="abhishek" handleChange={(event) => console.log(event)} />
//       <Container
//         styles={{
//           border: "1px solid black",
//           padding: "1rem",
//           margin: "1rem",
//           width: "50%",
//         }}
//       />
//       <LoginComponent />
//       <User/>
