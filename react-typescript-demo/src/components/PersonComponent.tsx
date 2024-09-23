import React from "react";

type PersonProp = {
  name: {
    first: string;
    last: string;
  };
};
const PersonComponent = (props: PersonProp) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default PersonComponent;
