import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { BiHelpCircle } from "react-icons/bi";
import { RxPerson, RxCounterClockwiseClock } from "react-icons/rx";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";

const DrawerLg = ({drawerWidth,open}) => {
  return (
    <Drawer
      className=" hidden lg:block  "
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: 9,
          border: 0,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className="menu  bg-base-100 text-base-content">
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
    </Drawer>
  );
};

export default DrawerLg;