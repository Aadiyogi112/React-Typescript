import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import PersonComponent from "./components/PersonComponent";
import PersonList from "./components/PersonList";
import { RandomNumber } from "./components/restriction/RandomNumber";
import LoginComponent from "./components/state/Login";
import User from "./components/state/User";
import Status from "./components/Status";
import { Toast } from "./components/TemplateLiteral/Toast";

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
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <List
        items={["Abhishek", "Abhishek2", "Abhishek3"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
       <List
        items={[{first: 'Abhishek',last:'something'}, {first: 'Abhishek2',last:'something2'}, {first: 'Abhishek3',last:'something3'}]}
        onClick={(item) => console.log(item)}
      />
       */}
      {/* <RandomNumber value={10} isPositive />
      <Toast position="right-bottom" />
       */}
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
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
