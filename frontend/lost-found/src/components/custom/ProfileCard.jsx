import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { db } from "@/service/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa";

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
  const [isChecked, setIsChecked] = useState(false); 

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
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) {
      setIsChecked(false); 
      return;
    }

    try {
      const itemRef = doc(db, type, data.id);
      await deleteDoc(itemRef);
      const imageName = data?.userSelection.image.split("/").pop();
      const res = await fetch(
        `http://localhost:3000/delete-image?filename=${imageName}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete image");
      }
      onDelete(data.id);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 px-3 rounded-lg shadow-lg transform transition-all h-auto w-72 duration-300 ease-in-out hover:scale-105 hover:shadow-xl border hover:border-purple-900">
      <div className="flex space-x-6 mb-6">
        <img
          src={data?.userSelection.image}
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
                className="font-bold text-lg text-black mb-2 w-full"
              />
              <input
                type="text"
                name="contact"
                value={editItem.contact}
                onChange={handleEditChange}
                className="text-xs sm:text-sm w-full mb-2"
              />
              <select
                id="category"
                name="category"
                required
                value={editItem.category}
                onChange={handleEditChange}
                className="p-2 rounded-xl border border-black text-black w-full mb-2"
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Documents">Documents</option>
                <option value="Personal Items">Personal Items</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Books">Books</option>
                <option value="Bags">Bags</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Toys">Toys</option>
                <option value="Keys">Keys</option>
                <option value="Sporting Goods">Sporting Goods</option>
                <option value="Health Care">Health Care</option>
                <option value="Stationery">Stationery</option>
                <option value="Tools and Equipment">Tools and Equipment</option>
                <option value="Household Items">Household Items</option>
                <option value="Pet Supplies">Pet Supplies</option>
                <option value="Other">Other</option>
              </select>
            </>
          ) : (
            <>
              <h3 className="font-bold text-lg text-black overflow-x-auto w-28 text-nowrap">
                {data?.userSelection.item}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{data?.userSelection?.date}</p>
              <p className="text-sm text-gray-500">{data?.userSelection?.category}</p>
              <p className="text-gray-500 text-xs sm:text-sm overflow-x-auto w-28 text-nowrap">
                {user.name}
              </p>
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

      {!isEditing && (
        <p className="text-gray-500 text-sm my-2 h-12 overflow-y-auto">
          {data?.userSelection?.description}
        </p>
      )}
      {isEditing ? (
        <textarea
          name="description"
          value={editItem.description}
          onChange={handleEditChange}
          className="ext-gray-500 text-sm my-1 mt-3 w-full h-10 overflow-y-auto"
        />
      ) : null}
      {!isEditing && <div className="w-full bg-gray-500 h-[0.25px]"></div>}
      <div className="flex items-center gap-3 mt-1 text-xl text-purple-900">
        <MdLocationPin />
        {isEditing ? (
          <input
            type="text"
            name="place"
            value={editItem.place}
            onChange={handleEditChange}
            className="font-semibold w-full"
          />
        ) : (
          <p className="font-semibold">{data?.userSelection?.place}</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button className="cursor-pointer" onClick={handleDelete}>
        <FaTrashAlt />
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
