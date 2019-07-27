import React, {useState} from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = (props) => {
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {props.numbers.map(number => {
        return <NumberButton number={number} />;
      })}
    </div>
  );
};

export default Numbers;