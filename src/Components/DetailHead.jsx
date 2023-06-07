import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { TfiExport } from "react-icons/tfi";
import { AiOutlinePrinter } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { CgCamera } from "react-icons/cg";
import { Link } from "react-router-dom";

const DetailHead = ({ contactDetail }) => {
  const [star, setStar] = useState(false);
  console.log(contactDetail);

  return (
    <div className="relative">
      <div className=" border-b-4 p-10 md:flex justify-between items-end mx-5 mb-10 h-[460px] md:h-[250px]">
        <div className=" flex flex-col md:flex-row justify-start items-center gap-10 mt-16">
          {/* <span className="myLabel text-6xl text-white font-bold bg-primary capitalize ">
            {contactDetail?.firstName[0]}
          </span> */}
          <img src={contactDetail?.image} className="w-56 h-40" alt="" />
          <p className=" capitalize text-3xl tracking-wider font-semibold">
            {contactDetail?.firstName +
              " " +
              contactDetail?.lastName}
          </p>
          <Link to={`/edit/${contactDetail?.id}`} state={contactDetail}>

          <button className=" w-[120px] h-[50px] md:w-[30px] md:h-[30px] p-2   border-2 border-zinc-300 rounded-full inline-block md:hidden ">
            <span className=" flex justify-center items-center text-2xl font-bold">
              <MdEdit />
              <span className="ml-2 block md:hidden"> Edit</span>
            </span>
          </button>
          </Link>
        </div>
        <div className="absolute top-0 right-1 md:relative mt-5 flex md:justify-end items-center">
          <div>
            <button
              onClick={() => {
                setStar(!star);
              }}
              className="text-2xl"
            >
              <div
                className=" tooltip tooltip-bottom capitalize"
                data-tip={`${star?"remove star" :"star contact"}`}
              >
                {star ? (
                  <BsFillStarFill color="bg-primary" />
                ) : (
                  <BsStar color="bg-primary" />
                )}
              </div>
            </button>
          </div>
          <div className="dropdown dropdown-end mx-2">
            <label
              tabIndex={0}
              className="btn m-1 bg-zinc-50 font-extrabold text-2xl w-[40px] text-black hover:bg-zinc-50 border-0"
              
            >
              ...
            </label>
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
          <Link to={`/edit/${contactDetail?.id}`} state={contactDetail}>

          <button className=" hidden md:block w-[100px] h-[50px] py-3 px-5 bg-primary text-white border-4 border-[#047AFF] btn btn-primary mySave">
          <span className=" font-semibold">Edit</span>
          </button>
          </Link>
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
  );
};

export default DetailHead;
