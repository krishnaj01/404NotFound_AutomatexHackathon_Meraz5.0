import React, { useState } from "react";
import { db } from "@/service/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-input-2";

const Lost = () => {
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    date: formatDate(new Date()),
    email: user.email,
    item: "",
    description: "",
    place: "",
    contact: "",
  });

  const SaveLostItem = async (formData) => {
    const docID = Date.now().toString();
    try {
      await setDoc(doc(db, "LostItems", docID), {
        userSelection: formData,
        userEmail: user?.email,
        id: docID,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error saving lost item:", error);
    }
  };

  const handleChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      contact: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SaveLostItem(formData);
  };

  return (
    <div className="bg-[url('./iitbhilai.png')] flex items-center justify-center h-screen bg-cover bg-center">
      <div className="relative z-10 bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Report your lost item
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
                className="p-2 rounded-xl border border-black bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                id="date"
                name="date"
                max={formatDate(new Date())}
                value={formData.date}
                onChange={handleChange}
                className="p-1.5 border border-black rounded-xl"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="sr-only">
              Contact
            </label>
            <PhoneInput
              country={"in"}
              value={formData.contact}
              onChange={handleChange}
              disableDropdown={true}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputStyle={{
                padding: "5px",
                borderRadius: "10px",
                border: "1px solid black"
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="item" className="block text-black">
              Lost Item
            </label>
            <input
              type="text"
              id="item"
              name="item"
              placeholder="Item Name"
              required
              value={formData.item}
              onChange={(e) =>
                setFormData({ ...formData, item: e.target.value })
              }
              className="p-2 rounded-xl border border-black text-black w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-black">
              Item Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Item Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="p-2 rounded-xl border border-black text-black w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="place" className="block text-black">
              Suspected Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={(e) =>
                setFormData({ ...formData, place: e.target.value })
              }
              className="p-2 rounded-xl border border-black text-black w-full"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="ml-auto">
              Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Lost;
