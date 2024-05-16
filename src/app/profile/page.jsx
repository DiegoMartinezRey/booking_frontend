"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Panel from "@/components/Panel";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [nameProfile, setNameProfile] = useState("");
  const [surnameProfile, setSurnameProfile] = useState("");

  useEffect(() => {
    getUserInfo();
  }, [user]);

  const url = "http://localhost:3001";

  const getUserInfo = async () => {
    if (user) {
      try {
        const response = await axios.get(`${url}/user/${user.id}`);
        const data = response.data;
        console.log(data);
        setUserInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const setEditModeConditions = () => {
    setNameProfile(userInfo.name);
    setSurnameProfile(userInfo.surname);
    setEditMode(!editMode);
  };

  const editProfile = async () => {
    if (editMode) {
      try {
        await axios.patch(`${url}/user/${userInfo._id}`, {
          name: nameProfile,
          surname: surnameProfile,
        });
        getUserInfo();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    setNameProfile("");
    setSurnameProfile("");
    setEditMode(false);
  };

  const deleteBooking = async (booking) => {
    try {
      await axios.patch(`${url}/user/unbook/${user.id}`, {
        bookingId: booking._id,
      });
      await axios.patch(`${url}/book/${booking._id}`, {
        availability: true,
      });
      getUserInfo();
    } catch (error) {
      console.log(error);
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
              {editMode ? (
                <InputField
                  type={"string"}
                  value={nameProfile}
                  placeholder={"Type here"}
                  onChange={(text) => setNameProfile(text)}
                />
              ) : (
                <h2>{userInfo.name}</h2>
              )}
            </div>
            <div className="flex gap-3">
              <h2>Surname:</h2>
              {editMode ? (
                <InputField
                  type={"string"}
                  value={surnameProfile}
                  placeholder={"Type here"}
                  onChange={(text) => setSurnameProfile(text)}
                />
              ) : (
                <h2>{userInfo.surname}</h2>
              )}
            </div>
            <div className="flex gap-3">
              <h2>Email: </h2>
              <h2>{userInfo.email}</h2>
            </div>
            {editMode ? (
              <div className="flex gap-2">
                <Button style={"save"} click={editProfile}>
                  Save
                </Button>
                <Button style={"delete"} click={() => setEditMode(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <Button style={"edit"} click={setEditModeConditions}>
                Edit
              </Button>
            )}
          </div>
        )}
      </Panel>
      <Panel>
        <div className="flex flex-col items-center gap-3">
          <h1>Bookings</h1>
          {userInfo.bookings &&
            userInfo.bookings.map((booking, index) => (
              <div
                key={index}
                className="flex gap-3 w-full justify-between flex-wrap border-solid border border-stone-50 rounded-2xl p-2"
              >
                <div className="flex gap-2">
                  <h2>
                    <b>Name:</b>
                  </h2>
                  <h2>{booking.name}</h2>
                </div>
                <div className="flex gap-2">
                  <h2>
                    <b>Type:</b>
                  </h2>
                  <h2>{booking.name}</h2>
                </div>
                <Button style={"delete"} click={() => deleteBooking(booking)}>
                  X
                </Button>
              </div>
            ))}
        </div>
      </Panel>
    </div>
  );
};

export default Profile;
