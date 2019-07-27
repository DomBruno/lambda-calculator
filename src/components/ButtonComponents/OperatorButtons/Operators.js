import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
//import any components needed
import {operators} from "../../../data";
//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {props.operators.map(operator => {
        return <OperatorButton operator={operator} />;
      })}
    </div>
  );
};
