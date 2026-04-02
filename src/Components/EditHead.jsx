import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const EditHead = (props) => {
  const { contactDetail, firstname, lastname, handleSave } = props;
  const fullname = firstname + " " + lastname;
  return (
    <>
      <div className=" flex justify-between align-top mt-3">
        <div className="flex gap-5">
          <Link to={`/`}>
            <RxCross2 className="mt-2" />
          </Link>
          <span className=" lg:hidden mb-4 text-2xl tracking-wider">
            Edit Contact
          </span>
        </div>
        <button
          onClick={handleSave}
          className="block lg:hidden btn btn-primary"
        >
          Save
        </button>
      </div>
      <div className="mt-5 p-3  flex justify-center lg:justify-between items-center  ">
        <div className="flex gap-5 items-center">
          <img src={contactDetail?.image} className=" w-56 h-40" alt="" />
          <h1 className=" hidden lg:block font-semibold text-3xl tracking-wider">
            {fullname}
          </h1>
        </div>
        <button
          onClick={handleSave}
          className=" hidden lg:block btn btn-primary"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditHead;
