import { useState } from "react";

const InputField = ({ label, type, placeholder, value, setChange }) => {
  const [text, setText] = useState("");

  const getChange = (e) => {
    setText(e.target.value);
    setChange(text);
  };

  return (
    <div>
      {/* <label htmlFor={`${value}`} className="">
        {label}{" "}
      </label> */}
      <input
        id={`${value}`}
        type={`${type}`}
        placeholder={`${placeholder}`}
        value={value}
        onChange={getChange}
        className=""
      />
    </div>
  );
};

export default InputField;
