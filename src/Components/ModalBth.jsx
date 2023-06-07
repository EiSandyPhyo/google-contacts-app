import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { MdOutlineClose } from "react-icons/md"
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 510,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 20,
  p: 4,
};

const ModalBth = ({ openModal, setOpenModal }) => {
  // const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const name = "Ei";
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <div className="flex flex-col gap-5">
              <div className=" flex flex-wrap justify-between items-center ">
                <h1 className=" font-semibold text-lg">Update birthday</h1>
                <MdOutlineClose className=" cursor-pointer" onClick={()=>setOpenModal(false)} size={20}/>  
              </div>

              <div className="flex flex-wrap gap-3 cursor-pointer px-3 mt-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={`https://ui-avatars.com/api/?name=${name[0]}&background=random&font-size=0.5`}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-semibold capitalize">
                    <p className="text-md">
                      {/* {contact?.firstName + " " + contact?.lastName} */}
                      Ei Sandy
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      {/* {contact?.email} */}
                      eisandy@gmail.com
                      </p>
                  </div>
                </div>
              </div>

              <div className=" md:w-[700px] px-3">
                <input
                  type="text"
                  placeholder="Birthday"
                  value={"12-07-1995"}
                  className="input w-full max-w-xs border-primary block"
                />
                <span className=" text-[11px] ml-5 text-gray-400">mm/dd/yyyy (year optional)</span>
              </div>

              <div className="px-3">
                <p className="text-sm">
                  To see birthdays on your calendar, the <a href="https://support.google.com/calendar/answer/6084659" className="text-primary" target="_blank">birthday calendar</a> has to be turned on.
                  </p>
              </div>

              <div className="flex flex-wrap justify-end items-center gap-3 mt-[150px]">
              <button className='block btn text-primary bg-base-200 border-none hover:bg-base-300' onClick={()=>setOpenModal(false)}>Back</button>
              <button className='block btn btn-primary'>Save</button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalBth;
