import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
//import any components needed
import {specials} from "../../../data";
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {props.specials.map(special => {
        return <SpecialButton special={special} />;
      })}
    </div>
  );
};
