"use client";
import Panel from "@/components/Panel";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo();
  }, [user]);

  const url = "http://localhost:3001";

  const getUserInfo = async () => {
    if (user) {
      try {
        const response = await axios.get(`${url}/user/${user.id}`);
        const data = response.data;
        setUserInfo(data);
        console.log("data: ", data, "bookiongs: ", data.bookings);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-m mt-5">
      <Panel>
        {userInfo && (
          <div className="flex flex-col items-center gap-3">
            <h1>User details</h1>
            <div className="flex gap-3">
              <h2>Name: </h2>
              <h2>{userInfo.name}</h2>
            </div>
            <div className="flex gap-3">
              <h2>Surname:</h2>
              <h2>{userInfo.surname}</h2>
            </div>
            <div className="flex gap-3">
              <h2>Email: </h2>
              <h2>{userInfo.email}</h2>
            </div>
          </div>
        )}
      </Panel>
      <Panel>
        <div className="flex flex-col items-center gap-3">
          <h1>Bookings</h1>
          {userInfo.bookings &&
            userInfo.bookings.map((booking, index) => (
              <div key={index} className="flex gap-3">
                <h2>Id: </h2>
                <h2>{booking}</h2>
              </div>
            ))}
        </div>
      </Panel>
    </div>
  );
};

export default Profile;
