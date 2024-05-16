import Button from "@/components/Button";
import { useAuth } from "@/contexts/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NavBar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const apiUrl = process.env.API_URL;
  useEffect(() => {}, []);

  return (
    <div className="bg-gray-900 h-16 flex justify-around items-center">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <h1 onClick={() => console.log(process.env.NEXT_PUBLIC_API_URL)}>
          Booking
        </h1>
      </div>
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
            <div
              className="flex gap-2 hover:underline cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <h2>Profile</h2>
            </div>
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
