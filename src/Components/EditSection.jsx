import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { PiSuitcase } from "react-icons/pi";

const EditSection = ({
  firstname,
  setFirstName,
  lastname,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  birthday,
  setBirthday,
  companyName,
  setCompanyName,
  jobTitle,
  setJobTitle,
  companyDepartment,
  setCompanyDepartment,
  streetAddress,
  setStreetAddress,
  city,
  setCity,
  showM,
  setShowM,
}) => {
  /*     const [firstname,setFirstName]=useState(contactDetail?.firstName);
    const [lastname,setlastName]=useState(contactDetail?.lastName);
    const [email,setemail]=useState(contactDetail?.email);
    const [phone,setPhone]=useState(contactDetail?.phone);
    const [showM, setShowM] = useState(false);
    const [birthday,setBirthday]=useState(contactDetail?.birthDate);
    const [company,setCompany]=useState(contactDetail?.company) */

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
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className={`input w-full max-w-xs border-primary hover:border-[#2c6f71] block mb-3`}
              />
              <input
                value={lastname}
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
                  type="text"
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
            className="flex justify-center items-start w-[120px] h-[50px] py-3 px-3 text-[#428284] mx-auto"
          >
            {showM ? " Show less" : "Show more"}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditSection;
