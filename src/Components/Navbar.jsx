import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/services/authSlice";
import Search from "./Search";
/* import { useLogoutMutation } from "../redux/api/authApi"; 
import { useGetContactQuery } from "../redux/api/contactApi"; */

const Navbar = (props) => {
  const { AppBar, open, handleDrawerClose, handleDrawerOpen, toggleDrawer } =
    props;
  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
  const pfImage = JSON.parse(Cookies.get("image"));
  const token = Cookies.get("token") || "";
  /* const [logout] = useLogoutMutation(); */

  const nav = useNavigate();
  const dispatch = useDispatch();

  /*   const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    nav("/login");
  }; */
  const logoutHandler = async () => {
    localStorage.removeItem("contacts");
    dispatch(removeUser());
    nav("/login");
  };

  return (
    <div>
      <AppBar position="fixed" open={open}>
        <div className=" navbar fixed bg-base-100 shadow-none ">
          <label
            tabIndex={0}
            className="hidden lg:block btn btn-ghost btn-circle avatar"
          >
            <button onClick={open ? handleDrawerClose : handleDrawerOpen}>
              <FiMenu className=" mt-3 w-5 h-5 text-primary" />
            </button>
          </label>
          <label
            tabIndex={0}
            className="lg:hidden btn btn-ghost btn-circle avatar"
          >
            <button onClick={toggleDrawer}>
              <HiMenu className="mx-3 w-5 h-5 text-primary" />
            </button>
          </label>

          <div className="navbar ">
            <div className="flex-1">
              <Link to={"/"}>
                <GoPerson className="w-7 h-7 text-primary" />
              </Link>
              <Link
                to={"/"}
                className="hidden md:block ms-4  font-semibold normal-case text-2xl tracking-wider text-primary"
              >
                Contact
              </Link>
            </div>
            <Search />
            <div className="flex-none  border-none">
              <div className="dropdown dropdown-end lg:ps-2 ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={pfImage}
                      className="w-5 h-5"
                      alt={user?.name || "Profile"}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 text-secondary rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={logoutHandler}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
