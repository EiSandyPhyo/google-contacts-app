import React, { useEffect, useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { CiImport, CiExport, CiMenuKebab } from "react-icons/ci";
import {
  MdOutlineMenuOpen,
  MdOutlineInfo,
  MdCake,
  MdIndeterminateCheckBox,
} from "react-icons/md";
import { BiTag, BiEnvelope } from "react-icons/bi";
import { LuFolderDown } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

import GetContacts from "../Pages/GetContacts";
import Sidebar from "./Sidebar";
import { useGetContactQuery } from "../redux/api/contactApi";
import { Loader } from "@mantine/core";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

import "../App.css";
import ModalBth from "./ModalBth";

const Contact = () => {
  const { data, isLoading } = useGetContactQuery();
  const [contacts, setContacts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(7);

  const [selected, setSelected] = useState(true); //hide n show select & unselect
  const [checked, setChecked] = useState([]); //checkbox select & unselect

  const [openModal, setOpenModal] = useState(false);

  const handlerClick = (e, name, email) => {
    setOpenModal(true);
    // console.log(e.target)
    // console.log(name, email);
  };

  useEffect(() => {
    if (data !== undefined && (data?.users).length !== 0) {
      setContacts(data?.users);
      // console.log(data?.users);
    }
  });

  const lastPage = currentPage * pageSize; // 10 = 1*10
  const firstPage = lastPage - pageSize; // 0 = 10-10

  const currentPages = contacts.slice(firstPage, lastPage); // =contacts[](0,10)
  // console.log(currentPages); //10
  const noOfPage = Math.ceil(contacts.length / pageSize);
  // console.log(noOfPage); //30
  const numbers = [...Array(noOfPage + 1).keys()].slice(1);
  // console.log(numbers);

  const handleChangePage = (e, p) => {
    setCurrentPage(p);
    // console.log(e, p);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (isLoading) {
    return (
      <div className=" flex flex-wrap justify-center h-screen items-center">
        <Loader size="md" />
      </div>
    );
  }

  return (
    <>
      <Sidebar>
        <div className=" flex">
          <div className=" w-6/7">
            <table className= "table "/* {`${menuOpen ? "table w-3/3" : "table w-full"}`} */>
              {/* head */}
              <thead>
                {selected ? (
                  <tr>
                    <th className="capitalize w-1/5 max-[1003px]:w-1/3">
                      name
                    </th>
                    <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:w-1/3">
                      email
                    </th>
                    <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden">
                      phone number
                    </th>
                    <th
                      className={
                        menuOpen
                          ? "hidden"
                          : "capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden"
                      }
                    >
                      {/* address */} Job title & company
                    </th>
                    <th className="w-1/5 max-[574px]:w-2/5 max-[1003px]:1/3">
                      <div className="flex items-center space-x-5 justify-end">
                        <div
                          className="tooltip tooltip-bottom lowercase cursor-pointer"
                          data-tip="print"
                        >
                          <HiPrinter className="text-lg max-[574px]:text-[16px]" />
                        </div>
                        <div
                          className="tooltip tooltip-bottom lowercase cursor-pointer"
                          data-tip="import"
                        >
                          <CiImport className="text-lg max-[574px]:text-[16px]" />
                        </div>
                        <div
                          className="tooltip tooltip-bottom lowercase cursor-pointer"
                          data-tip="export"
                        >
                          <CiExport className="text-lg max-[574px]:text-[16px]" />
                        </div>
                        <div
                          className="tooltip tooltip-bottom capitalize"
                          data-tip="list settings"
                        >
                          <CiMenuKebab className="text-lg max-[574px]:text-[16px]" />
                        </div>
                      </div>
                    </th>
                  </tr>
                ) : (
                  <tr>
                    <th className="w-1/5 max-[574px]:col-span-1">
                      <div className="flex flex-wrap items-center gap-3 ml-[8px]">
                        <MdIndeterminateCheckBox
                          className=" text-[30px] cursor-pointer"
                          onClick={() => setChecked([])}
                        />
                        <span className=" capitalize text-[16px] ml-3 max-[574px]:text-[13px]">
                          {checked.length} selected
                        </span>
                      </div>
                    </th>
                    <th className=" w-1/5 max-[574px]:hidden max-[1003px]:w-1/3"></th>
                    <th className=" w-1/5 max-[574px]:hidden max-[1003px]:hidden"></th>
                    <th
                      className={
                        menuOpen
                          ? "hidden"
                          : " w-1/5 max-[574px]:hidden max-[1003px]:hidden"
                      }
                    ></th>
                    <th className="w-1/5 max-[574px]:w-2/5 max-[1003px]:1/3">
                      <div className="flex items-center space-x-5 justify-end">
                        <div
                          className="tooltip tooltip-bottom lowercase"
                          data-tip="label"
                        >
                          <BiTag className="text-lg max-[574px]:text-[16px] rotate-180" />
                        </div>
                        <div
                          className="tooltip tooltip-bottom lowercase cursor-pointer"
                          data-tip="mail"
                        >
                          <Link to={`https://mail.google.com`}>
                            <BiEnvelope className="text-lg max-[574px]:text-[16px]" />
                          </Link>
                        </div>

                        <div className="dropdown dropdown-end">
                          <label tabIndex={0} className=" m-1 cursor-pointer">
                            <div
                              className=" tooltip tooltip-bottom capitalize"
                              data-tip="more actions "
                            >
                              <CiMenuKebab className="text-lg max-[574px]:text-[16px]" />
                            </div>
                          </label>
                          <ul
                            tabIndex={0}
                            className=" capitalize  space-y-1 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 text-secondary rounded-box w-56 font-normal"
                          >
                            <li>
                              <a>
                                <HiPrinter />
                                Print
                              </a>
                            </li>
                            <li>
                              <a>
                                <CiExport />
                                Export
                              </a>
                            </li>
                            <li>
                              <a>
                                <LuFolderDown />
                                Hide from contacts
                              </a>
                            </li>
                            <li>
                              <a>
                                <RiDeleteBin6Line />
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </th>
                  </tr>
                )}
              </thead>

              {(data?.users).length !== 0 && (
                <tbody>
                  
                  <tr>
                    <td>
                      <div className="my-4">
                      <p className=" uppercase text-xs text-[#91979b] ml-4 tracking-widest">
                        {contacts.length === 1
                          ? `contact (${contacts.length})`
                          : `contacts (${contacts.length})`}
                      </p>
                    </div>
                    </td>
                    
                  </tr>

                  {currentPages?.map((contact) => {
                    return (
                      <GetContacts
                        key={contact?.id}
                        contact={contact}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        checked={checked}
                        setChecked={setChecked}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>

          {/* <div
            className={
              menuOpen
                ? "w-2/4 h-14 max-[574px]:hidden max-[1003px]:hidden lg:block 2xl:block mt-3 ml-2"
                : "w-1/7 h-14  max-[574px]:hidden max-[1003px]:hidden lg:block 2xl:block mt-3 ml-2"
            }
          >
            <div
              className="tooltip tooltip-bottom capitalize cursor-pointer text-xs"
              data-tip={menuOpen ? "hide sidebar" : "show sidebar"}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="btn btn-ghost btn-xs "
              >
                <MdOutlineMenuOpen
                  size={23}
                  className={menuOpen ? " rotate-180" : ""}
                />
              </button>
            </div>
            <div className=" w-96 mt-[-2.5rem] ml-auto">
              {menuOpen ? (
                <div class="card bg-base-100 shadow-3xl">
                  <div class="card-body">
                    <h2 class="card-title">Add birthdays</h2>
                    <div className="flex flex-wrap justify-between items-start">
                      <div className="w-5/6">
                        <p className="text-xs text-500 ">
                          Save your contacts' birthdays to see them on your
                          birthday calendar and get helpful cues here and across
                          Google services
                        </p>
                      </div>
                      <div className="1/6">
                        <MdOutlineInfo
                          size={20}
                          className="cursor-pointer ml-auto"
                        />
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3">
                      <ul className=" space-y-2  menu menu-compact dropdown-content ">
                        {currentPages.map((contact) => {
                          const name =
                            contact?.firstName + " " + contact?.lastName;
                          const email = contact?.email;
                          return (
                            <li className="hover:bg-[#F2F7FF]">
                              <div
                                className="flex flex-wrap justify-between items-center cursor-pointer"
                                onClick={(e) => handlerClick(e, name, email)}
                              >
                                <div className="flex flex-wrap gap-3  cursor-pointer">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img
                                        src={contact?.image}
                                        // `https://ui-avatars.com/api/?name=${contact?.username[0]}&background=random&font-size=0.5` 
                                        alt="Avatar Tailwind CSS Component"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="font-semibold capitalize">
                                      <p className="text-sm">
                                        {contact?.firstName +
                                          " " +
                                          contact?.lastName}
                                      </p>
                                    </div>
                                    <div className="">
                                      <p className="text-xs text-gray-500">
                                        {contact?.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ml-auto">
                                  <MdCake />
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div> */}

        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          {numbers.length !== 0 && (
            <Pagination
              color="primary"
              onChange={handleChangePage}
              count={numbers.length}
            />
          )}
        </div>
      </Sidebar>
      <div className=" flex flex-wrap justify-center relative z-40">
        <div className=" w-1/2">
          {openModal && (
            <ModalBth openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
