const Button = ({ name, style }) => {
  return (
    <div
      className={`py-1.5 px-4 cursor-pointer ${
        style === "light" && "bg-slight text-black"
      } ${style === "dark" && "bg-sdark"} ${style === "book" && "bg-sbook"}
      w-fit rounded-xl`}
      onClick={() => console.log("Click")}
    >
      <p>{name}</p>
    </div>
  );
};

export default Button;
