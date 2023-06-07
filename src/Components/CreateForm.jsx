import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { BiNote } from "react-icons/bi";
import CreateHead from '../Components/CreateHead'
<CreateHead/>

const CreateForm = () => {
  const [showM, setShowM] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");

  return (
   <div className="container">
<CreateHead firstname={firstname} phone={phone} setFirstName={setFirstName} setPhone={setPhone}/>

     <div className=" md:mb-20 md:mt-[280px] mx-2 md:mx-20">
      <div className=" flex justify-center items-start gap-3">
        <div className=" p-5 text-xl">
          <FaUserAlt />
        </div>
        <div className="md:w-[700px]">
          <input
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className={`input w-full max-w-xs border-primary hover:border-[#047AFF] block mb-3`}
          />
          <input
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
            type="text"
            placeholder="Company"
            className="input w-full max-w-xs border-primary block mb-3"
          />
          <input
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
            type="text"
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
              type="text"
              placeholder="Street Address"
              className="input w-full max-w-xs border-primary block mb-3"
            />
            <input
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
        className="flex justify-center items-start w-[120px] h-[50px] py-3 px-3 text-[#047AFF] mx-auto"
      >
        {showM ? " Show less" : "Show more"}
      </button>
    </div>
   </div>
  );
};

export default CreateForm;