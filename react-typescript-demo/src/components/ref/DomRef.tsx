import { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); //Non Null Assertion
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};
