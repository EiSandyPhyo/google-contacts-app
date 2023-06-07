import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi";
import { RxPerson, RxCounterClockwiseClock } from "react-icons/rx";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";

const DrawerSm = ({ toggleDrawer, drawerSm }) => {
  return (
    <div>
      <div>
        {/* <Button >click</Button> */}
        <SwipeableDrawer
          sx={{
            width: 100,
          }}
          open={drawerSm}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <div className="menu mt-3  bg-base-100 text-base-content">
            <h1 className=" text-3xl font-semibold normal-case text-primary my-5 tracking-wider text-center ">
              Contacts
            </h1>
            <Link
              to={"/create"}
              className=" m-2   btn btn-primary rounded-full flex items-center gap-3"
            >
              <BsPersonPlusFill className="w-5 h-5" />
              Create Contact
            </Link>
            <ul
              tabIndex={0}
              className="mt-3 p-2 dropdown-content    text-secondary  w-52"
            >
              <li className=" rounded-box">
                <Link to={"/"}>
                  <i>
                    <RxPerson className="w-5 h-5" />
                  </i>
                  contacts
                </Link>
              </li>

              <li>
                <a>
                  <i>
                    <RxCounterClockwiseClock className="w-5 h-5" />
                  </i>
                  Recent
                </a>
              </li>

              <br />
              <li>
                <a>
                  <i>
                    <BiHelpCircle className="w-5 h-5" />
                  </i>
                  Help
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <HiOutlineTrash className="w-5 h-5" />
                  </i>
                  Trash
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <AiOutlineSetting className="w-5 h-5" />
                  </i>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default DrawerSm;
