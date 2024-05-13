import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <h1>Booking</h1>
      <div className="flex">
        <Button name={"Sign In"} />
        <Button name={"Sign Up"} />
      </div>
    </div>
  );
};

export default NavBar;
