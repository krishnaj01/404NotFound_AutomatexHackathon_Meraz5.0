// Profile.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProfileDetails from "./ProfileDetails";
import ProfileStats from "./ProfileStats";
import { Button } from "../ui/button";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import ProfileCards from "./ProfileCard";

function Profile() {
  const [variant, setVariant] = useState("outline");
  const [dvariant, setDVariant] = useState("default");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    GetUserData("LostItems");
  }, []);

  const GetUserData = async (collectionType) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const q = query(
      collection(db, collectionType),
      where("userEmail", "==", user.email)
    );

    setUserData([]);
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setUserData(data);
  };

  const show = () => {
    if (variant === "outline") {
      setVariant("default");
      setDVariant("outline");
      GetUserData("FoundItems");
    } else {
      setDVariant("default");
      setVariant("outline");
      GetUserData("LostItems");
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 p-6">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <Header />
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-2 w-full">
          <ProfileDetails />
          <ProfileStats />
        </div>
        <div className="flex justify-center items-center gap-5 my-5 mt-10">
          <Button variant={variant} onClick={show} className="w-64">
            Lost
          </Button>
          <Button variant={dvariant} onClick={show} className="w-64">
            Found
          </Button>
        </div>
        <div className="px-2 mt-5 py-5 w-full overflow-x-auto">
          <div className="flex gap-5 my-10">
            {userData.map((data, index) => (
              <ProfileCards data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
