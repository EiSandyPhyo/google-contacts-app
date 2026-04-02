import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { PiSuitcase } from "react-icons/pi";
import CreateHead from "../Components/CreateHead";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [showM, setShowM] = useState(false);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyDepartment, setCompanyDepartment] = useState("");

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");

  const isFormValid =
    firstName.trim().length >= 2 &&
    lastName.trim().length >= 2 &&
    phone.trim().length >= 10 &&
    phone.trim().length <= 15 &&
    (email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) &&
    (birthday === "" || !isNaN(Date.parse(birthday))) &&
    companyName.trim().length >= 2 &&
    jobTitle.trim().length >= 2 &&
    companyDepartment.trim().length >= 2 &&
    streetAddress.trim().length >= 5 &&
    city.trim().length >= 2;

  const handleCreateContact = () => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const maxId =
      savedContacts.length > 0
        ? Math.max(...savedContacts.map((contact) => contact.id))
        : 30;

    const imageName = firstName.trim() ? firstName.toLowerCase() : "user";

    const newContact = {
      id: maxId + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      birthDate: birthday,
      image: `https://dummyjson.com/icon/${imageName}/128`,
      company: {
        name: companyName,
        title: jobTitle,
        department: companyDepartment,
      },
      address: {
        address: streetAddress,
        city: city,
      },
    };

    const updatedContacts = [newContact, ...savedContacts];

    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    //toast.success("Contact created successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <CreateHead
        handleCreateContact={handleCreateContact}
        firstName={firstName}
        isFormValid={isFormValid}
      />

      <div className=" my-9 mx-2 md:mx-20">
        <div className=" flex justify-center items-start gap-3">
          <div className=" p-5 text-xl">
            <FaUserAlt />
          </div>
          <div className="md:w-[700px]">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className={`input w-full max-w-xs border-primary hover:border-[#047AFF] block mb-3`}
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="input w-full max-w-xs border-primary block mb-3 "
            />
          </div>
        </div>
        <div className=" flex justify-center items-start gap-3">
          <div className=" p-5 text-xl">
            <BsBuildings />
          </div>
          <div className="md:w-[700px]">
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              placeholder="Company Name"
              className="input w-full max-w-xs border-primary block mb-3"
            />
            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              type="text"
              placeholder="Job Title"
              className="input w-full max-w-xs border-primary block mb-3"
            />
          </div>
        </div>
        <div className=" flex justify-center items-start gap-3">
          <div className=" p-5 text-xl">
            <TfiEmail />
          </div>
          <div className="md:w-[700px]">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="input w-full max-w-xs border-primary block mb-3"
            />
          </div>
        </div>

        <div className=" flex justify-center items-start gap-3">
          <div className=" p-5 text-xl">
            <BsTelephone />
          </div>
          <div className="md:w-[700px]">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Phone"
              className="input w-full max-w-xs border-primary block mb-3"
            />
          </div>
        </div>

        <div className={` ${showM ? "block" : "hidden"}`}>
          <div className=" flex justify-center items-start gap-3">
            <div className=" p-5 text-xl">
              <BiLocationPlus />
            </div>
            <div className="md:w-[700px]">
              <input
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                type="text"
                placeholder="Street Address"
                className="input w-full max-w-xs border-primary block mb-3"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
                className="input w-full max-w-xs border-primary block mb-3"
              />
            </div>
          </div>

          <div className=" flex justify-center items-start gap-3">
            <div className=" p-5 text-xl">
              <FaBirthdayCake />
            </div>
            <div className="md:w-[700px]">
              <input
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                type="date"
                placeholder="Birthday"
                className="input w-full max-w-xs border-primary block mb-3"
              />
            </div>
          </div>
          <div className=" flex justify-center items-start gap-3">
            <div className=" p-5 text-xl">
              <PiSuitcase />
            </div>
            <div className="md:w-[700px]">
              <input
                value={companyDepartment}
                onChange={(e) => setCompanyDepartment(e.target.value)}
                type="text"
                placeholder="Department"
                className="input w-full max-w-xs border-primary block mb-3"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowM(!showM)}
          className="flex justify-center items-start w-[120px] h-[50px] py-3 px-3 text-[#047AFF] mx-auto"
        >
          {showM ? " Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
