import React from "react";

type StatusProps = {
   status: 'Loading'|'Success'|'Error';
}; 

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "Success") {
    message = "Success";
  } else if (props.status === "Error") {
    message = "Error";
  } else if(props.status === "Loading"){
    message = "Loading";
  }
  return (
    <div>
     Message - {message}
    </div>
  );
};

export default Status;
