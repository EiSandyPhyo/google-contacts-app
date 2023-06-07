import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { BiNote } from "react-icons/bi";

const EditSection = ({contactDetail}) => {
    const [firstname,setFirstName]=useState(contactDetail?.firstName);
    const [lastname,setlastName]=useState(contactDetail?.lastName);
    const [email,setemail]=useState(contactDetail?.email);
    const [address,setAddress]=useState(contactDetail?.address);
    const [phone,setPhone]=useState(contactDetail?.phone);
    const [showM, setShowM] = useState(false);
    const [birthday,setBirthday]=useState(contactDetail?.birthDate);
    const [company,setCompany]=useState(contactDetail?.company)
  return (
  <>
  <div className="container">
     <div className=" my-9 mx-2 md:mx-20">
      <div className=" flex justify-center items-start gap-3">
        <div className=" p-5 text-xl">
          <FaUserAlt />
        </div>
        <div className="md:w-[700px]">
          <input
            value={firstname}
            type="text"
            placeholder="First Name"
            className={`input w-full max-w-xs border-primary hover:border-[#2c6f71] block mb-3`}
          />
          <input
          value={lastname}
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
            value={company?.name}
            type="text"
            placeholder="Company"
            className="input w-full max-w-xs border-primary block mb-3"
          />
          <input
          value={company?.title}
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
            type="text"
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
             value={address?.address+" "+address?.city}
              type="text"
              placeholder="Address"
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
              type="text"
              placeholder="Birthday"
              className="input w-full max-w-xs border-primary block mb-3"
            />
          </div>
        </div>
        <div className=" flex justify-center items-start gap-3">
          <div className=" p-5 text-xl">
            <BiNote />
          </div>
          <div className="md:w-[700px]">
            <input
              type="text"
              placeholder="Note"
              className="input w-full max-w-xs border-primary block mb-3"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowM(!showM)}
        className="flex justify-center items-start w-[120px] h-[50px] py-3 px-3 text-[#428284] mx-auto"
      >
        {showM ? " Show less" : "Show more"}
      </button>
    </div>
   </div>
  
  </>
  )
}

export default EditSection