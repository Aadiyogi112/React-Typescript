import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  loggedIn: boolean;
}; 
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.loggedIn
        ? `Welcome ${props.name} you have ${props.messageCount} mesages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
