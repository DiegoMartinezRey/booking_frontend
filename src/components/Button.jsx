import Link from "next/link";

const Button = ({ children, style, link }) => {
  return (
    <Link
      className={`py-1.5 px-4 cursor-pointer ${
        style === "light" && "bg-slight text-black"
      } ${style === "dark" && "bg-sdark"} ${style === "book" && "bg-sbook"}
      w-fit rounded-xl`}
      onClick={() => console.log("Click")}
      href={link}
    >
      <p>{children}</p>
    </Link>
  );
};

export default Button;
