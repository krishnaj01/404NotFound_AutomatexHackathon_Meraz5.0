import React, { useEffect, useState } from 'react';
import ItemCards from '../custom/ItemCards';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';

const CardList = ({ type, searchTerm }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    GetUserData();
  }, [type]); // Ensures it re-fetches data when 'type' changes

  const GetUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const q = collection(db, type)
  

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    
    // Log the data to see if it loads correctly
    console.log("Fetched user data:", data);

    setUserData(data);
  };

  // Check if searchTerm filtering works correctly
  const filteredData = searchTerm
    ? userData.filter((item) =>
        item?.userSelection?.category?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : userData;

  // Log the filtered data for debugging
  console.log("Filtered data:", filteredData);

  return (
    <div className="px-2 mt-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 my-10">
        {filteredData.slice().reverse().map((data, index) => (
          <ItemCards data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
