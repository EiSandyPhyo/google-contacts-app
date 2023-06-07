import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TfiPlus } from "react-icons/tfi";
import toast, { Toaster } from "react-hot-toast";

const CreateHead = ({ firstname, phone, setFirstName, setPhone }) => {
  const [btnNotShow, setBtnNotShow] = useState(true);
  console.log(firstname, phone);
  console.log(firstname.length, phone.length);

  useEffect(() => {
    if (
      (firstname != "" && firstname.length !=0) &&
      (phone.length > 11 && phone.length < 15 && phone.length != 0)
    ) {
      setBtnNotShow(false);
    } else {
      setBtnNotShow(true);
    }
    setFirstName(firstname);
    setPhone(phone);
  }, [firstname, phone]);

  const SaveHandler = () => {
    if (btnNotShow) {
      toast.error(
        "Fill the name and phone number.The phone number must be between 11 and 15 characters"
      );
    } else {
      toast.success("New contact create successfully.");
    }
  };

  return (
    <div className=" ">
      <div className=" md:fixed top-5 left-5 right-5 border-0 md:border-b-4 p-10 md:flex justify-around items-end  bg-white h-[380px] md:h-[250px] ">
        <div className="mt-[70px] md:mt-5 flex flex-col md:flex-row md:justify-center items-center gap-10">
          <input
            type="file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
            id="file"
          />
          <label
            htmlFor="file"
            className=" myLabel bg-primary text-white cursor-pointer"
          >
            <BiImageAdd />
          </label>
          <button className=" w-[90px] h-[50px] px-3 border-2 border-zinc-300 rounded-2xl inline-block">
            <span className=" flex justify-center items-center gap-2 font-bold">
              <TfiPlus />
              label
            </span>
          </button>
        </div>
        <div className=" relative">
          <button
            onClick={SaveHandler}
            className={` absolute top-[-310px] right-[-45px] md:relative md:top-0 md:right-0 w-[100px] h-[50px] py-3 px-5 text-white border-4 btn  ${
              btnNotShow ? "btn-disable myBtnDisable" : "btn-primary"
            }`}
          >
            <span className=" font-semibold">Save</span>
          </button>
        </div>
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
