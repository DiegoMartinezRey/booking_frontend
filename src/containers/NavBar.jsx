import Button from "@/components/Button";
import { useAuth } from "@/contexts/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NavBar = () => {
  const { user, verify, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <h1>Booking</h1>
      <div className="flex items-center gap-3">
        {!user ? (
          <>
            <Button style={"light"} click={() => router.push("/login")}>
              Sign In
            </Button>
            <Button style={"dark"} click={() => router.push("/register")}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <h2>{user.name}</h2> <h2>{user.surname}</h2>
            <Button style={"dark"} click={logout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
