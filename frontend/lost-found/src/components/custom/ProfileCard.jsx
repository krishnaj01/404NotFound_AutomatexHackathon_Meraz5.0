import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { db } from "@/service/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

function ProfileCards({ data, onDelete, onEdit, type }) {
  return (
    <div>
      <ProfileCard data={data} onDelete={onDelete} onEdit={onEdit} type={type} />
    </div>
  );
}

function ProfileCard({ data, onDelete, onEdit, type }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState({ ...data?.userSelection });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({
      ...editItem,
      [name]: value,
    });
  };

  const handleSaveEdit = async () => {
    
    try {
      const itemRef = doc(db, type, data.id); 
      await updateDoc(itemRef, {
        userSelection: editItem,
      });
      setIsEditing(false);
      onEdit(editItem); 
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    window.location.reload();
  };

  const handleDelete = async () => {
   
    try {
      const itemRef = doc(db, type, data.id); 
      await deleteDoc(itemRef);
      onDelete(data.id); 
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 px-3 rounded-lg shadow-lg transform transition-all h-64 w-72 duration-300 ease-in-out hover:scale-105 hover:shadow-xl border hover:border-purple-900">
      <div className="flex space-x-6 mb-6">
        <img
          src="./Campus.jpg"
          alt="Item"
          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
        />
        <div className="flex flex-col text-left">
          {isEditing ? (
            <>
              <input
                type="text"
                name="item"
                value={editItem.item}
                onChange={handleEditChange}
                className="font-bold text-lg w-40 text-black"
              />
              <input
                type="text"
                name="contact"
                value={editItem.contact}
                onChange={handleEditChange}
                className="text-xs sm:text-sm w-40"
              />
              <textarea
                name="description"
                value={editItem.description}
                onChange={handleEditChange}
                className="text-gray-500 text-sm my-1 mt-3 w-40 h-20 overflow-y-auto"
              />
            </>
          ) : (
            <>
              <h3 className="font-bold text-lg text-black overflow-x-auto w-28 text-nowrap">
                {data?.userSelection.item}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {data?.userSelection?.date}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm overflow-x-auto w-28 text-nowrap">{user.name}</p>
              <div className="flex items-center gap-1 text-gray-500">
                <FaPhoneAlt />
                <p className="text-xs sm:text-sm">
                  {data?.userSelection?.contact.substring(2)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {!isEditing? <p className="text-gray-500 text-sm my-2 h-12 overflow-y-auto">
        {data?.userSelection?.description}
      </p> : null}
      {!isEditing && <div className="w-full bg-gray-500 h-[0.25px]"></div>}
      <div className="flex items-center gap-3 mt-1 text-xl text-purple-900">
        <MdLocationPin />
        {isEditing ? (
          <input
            type="text"
            name="place"
            value={editItem.place}
            onChange={handleEditChange}
            className="font-semibold w-40"
          />
        ) : (
          <p className="font-semibold">{data?.userSelection?.place}</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
        {isEditing ? (
          <button
            onClick={handleSaveEdit}
            className="text-green-500 hover:text-green-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileCards;
