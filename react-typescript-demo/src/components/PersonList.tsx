import React from "react";

type PersonList = {
    names: {
        first: string;
        last: string;
    }[];
}; 

const PersonList = (props: PersonList) => {
  return (
    <div>
      {props.names.map((name) => (
        <p>
          {name.first} {name.last}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
