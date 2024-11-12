import React, { useEffect, useState } from "react";
import ItemCards from "../custom/ItemCards";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";

const CardList = ({ type, searchTerm }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    GetUserData();
  }, [type]);

  const GetUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const q = collection(db, type);

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    setUserData(data);
  };

  const filteredData = searchTerm
    ? userData.filter(
        (item) =>
          item?.userSelection?.item
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item?.userSelection?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item?.userSelection?.category
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item?.userSelection?.date
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
    : userData;

  return (
    <div className="px-2 mt-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 my-10">
        {filteredData
          .slice()
          .reverse()
          .map((data, index) => (
            <ItemCards
              data={data}
              onDelete={(id) => handleItemDelete(id)}
              onEdit={(updatedItem) => handleItemEdit(updatedItem)}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default CardList;
