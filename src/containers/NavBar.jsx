import Button from "@/components/Button";
import { useAuth } from "@/contexts/Login";
import { useEffect } from "react";

const NavBar = () => {
  const { user, verify, logout } = useAuth();

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <h1>Booking</h1>
      {user && <h2>{user.name}</h2>}
      <div className="flex items-center gap-3">
        {!user ? (
          <>
            <Button style={"light"} click={() => console.log("click")}>
              Sign In
            </Button>
            <Button style={"dark"} click={() => console.log("click")}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <h2>{user.name}</h2>{" "}
            <Button style={"dark"} click={logout}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
