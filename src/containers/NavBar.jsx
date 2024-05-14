import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <h1>Booking</h1>
      <div className="flex gap-3">
        <Button style={"light"} link={"/login"}>
          Sign In
        </Button>
        <Button style={"dark"} link={"/register"}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
