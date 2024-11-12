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
  const [type, setType] = useState("LostItems");
  const [lostItemCount, setLostItemCount] = useState(0);
  const [foundItemCount, setFoundItemCount] = useState(0);

  useEffect(() => {
    // Fetch Lost Items initially
    GetUserData("LostItems");
    // Fetch Found Items count initially
    GetItemsCount("FoundItems");
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

    // Count Lost Items
    if (collectionType === "LostItems") {
      setLostItemCount(data.length);
    }
  };

  const GetItemsCount = async (collectionType) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const q = query(
      collection(db, collectionType),
      where("userEmail", "==", user.email)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    // Count Found Items
    if (collectionType === "FoundItems") {
      setFoundItemCount(data.length);
    }
  };

  const show = () => {
    if (variant === "outline") {
      setVariant("default");
      setDVariant("outline");
      GetUserData("FoundItems");
      setType("FoundItems")
    } else {
      setDVariant("default");
      setVariant("outline");
      GetUserData("LostItems");
      setType("LostItems")
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 p-6">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        <Header />
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 mt-2 w-full">
          <ProfileDetails />
          <ProfileStats lost={lostItemCount} found={foundItemCount} />
        </div>
        <div className="flex justify-center items-center gap-5 my-5 mt-10">
          <Button variant={variant} disabled={variant === "outline"} onClick={show} className="sm:w-52 md:w-64">
            Lost
          </Button>
          <Button variant={dvariant} disabled={dvariant === "outline"} onClick={show} className="sm:w-52 md:w-64">
            Found
          </Button>
        </div>
        <div className="px-2 mt-5 py-5 w-full overflow-x-auto">
          <div className="flex gap-5 my-10">
            {userData.slice().reverse().map((data, index) => (
              <ProfileCards data={data} key={index} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
