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
import toast from "react-hot-toast";
import "../App.css";
import ModalBth from "./ModalBth";

const Contact = () => {
  const { data, isLoading } = useGetContactQuery();
  const [contacts, setContacts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const [selected, setSelected] = useState(true); //hide n show select & unselect
  const [checked, setChecked] = useState([]); //checkbox select & unselect

  const [openModal, setOpenModal] = useState(false);

  const handlerClick = (e, name, email) => {
    setOpenModal(true);
    // console.log(e.target)
    // console.log(name, email);
  };
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else if (data?.users) {
      setContacts(data.users);
      localStorage.setItem("contacts", JSON.stringify(data.users));
    }
  }, [data]);

  const sortedContacts = [...contacts].sort((a, b) =>
    `${a.firstName} ${a.lastName}`.localeCompare(
      `${b.firstName} ${b.lastName}`,
    ),
  );
  // console.log(sortedContacts);

  const lastPage = currentPage * pageSize; // 10 = 1*10
  const firstPage = lastPage - pageSize; // 0 = 10-10

  const currentPages = sortedContacts.slice(firstPage, lastPage); // =contacts[](0,10)
  const noOfPage = Math.ceil(sortedContacts.length / pageSize);
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

  const handleDeleteContact = (id) => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const updatedContacts = savedContacts.filter(
      (contact) => contact.id !== id,
    );

    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    toast.success("Contact deleted successfully", {
      duration: 2000,
    });
   
  };

  console.log(contacts);

  return (
    <>
      <Sidebar>
        <div className=" flex">
          <div className=" w-6/7">
            <table
              className="table " /* {`${menuOpen ? "table w-3/3" : "table w-full"}`} */
            >
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
                      {/* address */} Job title & Department
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
                        handleDeleteContact={handleDeleteContact}
                      />
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
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
