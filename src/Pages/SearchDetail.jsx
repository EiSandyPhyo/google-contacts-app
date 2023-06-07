import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {  MdDelete, MdOutlineMail } from "react-icons/md";
import { TfiExport } from "react-icons/tfi";
import { AiOutlinePrinter, AiOutlineArrowLeft } from "react-icons/ai";
import { BiHide, BiMessage } from "react-icons/bi";
import { BsStar, BsFillStarFill, BsFolder, BsTelephone } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import {GrCircleQuestion} from "react-icons/gr"

const SearchDetail = () => {
    const location = useLocation();
  console.log(location.state);
  const value=location.state;
  return (
    <div>
      <div className="relative">
        <div className=" border-b-4 p-10 md:flex justify-between items-end mx-5 mb-10 h-[460px] md:h-[250px]">
          <div className=" flex flex-col md:flex-row justify-start items-center gap-10 mt-16">
            <img src={value?.image} className="w-56 h-40" alt="" />
            <p className=" capitalize text-3xl tracking-wider font-semibold">
              {value?.firstName + " " + value?.lastName}
            </p>
           
          </div>
          <div className="absolute top-0 right-1 md:relative mt-5 flex md:justify-end items-center">
            <div>
              
            </div>
            <div className="dropdown dropdown-end mx-2">
             
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-[#E3E9F4] rounded-box w-52"
              >
                <li>
                  <a className=" active:bg-primary active:text-white">
                    <AiOutlinePrinter />
                    Print
                  </a>
                </li>
                <li>
                  <a className=" active:bg-primary active:text-white">
                    <TfiExport /> Export
                  </a>
                </li>
                <li>
                  <a className=" active:bg-primary active:text-white">
                    <BiHide />
                    Hide from contact
                  </a>
                </li>
                <li>
                  <a className=" active:bg-primary active:text-white">
                    <MdDelete />
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className=" flex justify-center items-center gap-2 absolute bottom-[-10px] left-[110px] md:left-[300px]">
          <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
            <MdOutlineMail />
          </p>
          <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
            <BsFolder />
          </p>
          <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
            <BiMessage />
          </p>
          <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
            <CgCamera />
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start md:flex-row gap-10 md:justify-around md:items-start items-center md:mx-14 mb-5">
        <div className=" md:basis-1/2 w-4/5 border-2 p-4">
          <p className=" font-semibold mb-2">Contact details</p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <BsTelephone />
            <span className=" text-blue-600 cursor-pointer">
              {value?.phone}
            </span>
          </p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <MdOutlineMail />
            <span className=" text-blue-600 cursor-pointer">
              {value?.email}
            </span>
          </p>
          <p className="flex justify-start items-center gap-3 mb-2">
            <FaBirthdayCake />
            <span className=" text-blue-600 cursor-pointer">Add Birthday</span>
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
              <AiOutlineArrowLeft className="  text-[22px]" />
              <span className=" font-semibold">Go Back</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
