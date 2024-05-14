const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="text-black">
      {/* <label htmlFor={`${value}`} className="">
        {label}{" "}
      </label> */}
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=""
      />
    </div>
  );
};

export default InputField;
