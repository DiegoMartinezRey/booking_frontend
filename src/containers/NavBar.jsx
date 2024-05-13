import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <h1>Booking</h1>
      <div className="flex gap-3">
        <Button name={"Sign In"} style={"light"} />
        <Button name={"Sign Up"} style={"dark"} />
      </div>
    </div>
  );
};

export default NavBar;
