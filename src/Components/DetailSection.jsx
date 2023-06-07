import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { GrCircleQuestion } from "react-icons/gr";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai"


const DetailSection = ({ contactDetail }) => {
  return (
    <>
      <div className="flex flex-col justify-start md:flex-row gap-10 md:justify-around md:items-start items-center md:mx-14 mb-5">
        <div className=" md:basis-1/2 w-4/5 border-2 p-4">
          <p className=" font-semibold mb-2">Contact details</p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <BsTelephone />
              <span className=" text-blue-600 cursor-pointer">{contactDetail?.phone}</span>
          </p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <MdOutlineMail />
              <span className=" text-blue-600 cursor-pointer">{contactDetail?.email}</span>
          </p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <FaBirthdayCake />
              <span className=" text-blue-600 cursor-pointer">
                Add Birthday
              </span>
          </p>
        </div>
        <div className=" md:basis-1/2 ">
          <div className=" flex justify-start items-center gap-3 mb-2">
            <p>History </p>
            <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
              <GrCircleQuestion />
            </p>
          </div>
          <p className=" mb-2">Last edited • Yesterday, 9:02 PM</p>
          <p>Added to contacts • Yesterday, 9:02 PM</p>
          <Link to={"/"}>
            <button className="w-[150px] h-[45px] mt-5 py-2 px-5 bg-primary text-white border-4 border-[#047AFF] btn btn-primary mySave flex justify-center items-center gap-2">
              <AiOutlineArrowLeft className="  text-[22px]"/>
              <span className=" font-semibold">Go Back</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
