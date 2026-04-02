import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TfiPlus } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CreateHead = ({ handleCreateContact, firstName, isFormValid }) => {

  const imageName = firstName?.trim() ? firstName.toLowerCase() : "user";

  /*   const SaveHandler = () => {
    if (btnNotShow) {
      toast.error(
        "Fill the name and phone number.The phone number must be between 11 and 15 characters",
      );
    } else {
      toast.success("New contact create successfully.");
    }
  }; */

  return (
    <div className=" ">
      <div className=" flex justify-between align-top mt-3">
        <div className="flex gap-5">
          <Link to={`/`}>
            <RxCross2 className="mt-2" />
          </Link>
          <span className=" lg:hidden mb-4 text-2xl tracking-wider">
            Create Contact
          </span>
        </div>
        <button onClick={handleCreateContact}
          disabled={!isFormValid} 
          className={`block lg:hidden btn btn-primary ${
            isFormValid ? "btn-primary" : "myBtnDisable"
          }`} >Save</button>
      </div>

      <div className="mt-5 p-3  flex justify-center lg:justify-between items-center  ">
        <div className="flex gap-5 items-center">
          <img
            src={`https://dummyjson.com/icon/${imageName}/128`}
            className="w-56 h-40"
            alt={firstName || "New Contact"}
          />
          <h1 className="hidden lg:block font-semibold text-3xl tracking-wider">
            {firstName ? firstName : "New Contact"}
          </h1>
        </div>
        <button
          onClick={handleCreateContact}
          disabled={!isFormValid}   
          className={`hidden lg:block btn btn-primary ${
            isFormValid ? "btn-primary cursor-pointer" : "myBtnDisable disabled:cursor-not-allowed"
          }`}
        >
          Save
        </button>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#1f3738",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default CreateHead;
