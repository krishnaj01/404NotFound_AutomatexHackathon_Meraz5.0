import React, { useEffect, useState } from 'react';
import ItemCards from '../custom/ItemCards';
import { getDocs, query, where, collection } from 'firebase/firestore'; // Added 'collection' here
import { db } from '@/service/firebaseConfig';

const CardList = ({ type }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    GetUserData();
  }, []);

  const GetUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const q = query(
      collection(db, type),
      where("userEmail", "==", user?.email)
    );

    setUserData([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserData((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-56 px-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {userData.map((data, index) => (
          <ItemCards data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
