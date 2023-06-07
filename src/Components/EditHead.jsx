import React from 'react'
import { BiImageAdd } from "react-icons/bi";
import { TfiPlus } from "react-icons/tfi";
import toast, { Toaster } from "react-hot-toast";
import {RxCross2} from "react-icons/rx"
import { Link } from 'react-router-dom';


const EditHead = ({contactDetail}) => {
  return (
    <>
    <div className=" flex justify-between align-top mt-3">
    <div className='flex gap-5'>
      <Link to={`/`}><RxCross2 className='mt-2' /></Link>
    <span className=' lg:hidden mb-4 text-2xl tracking-wider'>Edit Contact</span>
    </div>
    <button className='block lg:hidden btn btn-primary'>Save</button>
    </div>
    <div className='mt-5 p-3  flex justify-center lg:justify-between items-center  '>
      <div className='flex gap-5 items-center'>
      <img src={contactDetail?.image} className=' w-56 h-40' alt="" />
        <h1 className=' hidden lg:block font-semibold text-3xl tracking-wider'>{contactDetail?.firstName+" "+contactDetail?.lastName}</h1>
      </div>
      <button className=' hidden lg:block btn btn-primary'>Save</button>
    </div>

    </>
    // <div className="  ">
    //   <div className=" md:fixed top-5 left-5 right-5 border-0 md:border-b-4 p-10 md:flex justify-around items-end  bg-white h-[380px] md:h-[250px] ">
    //     <div className="mt-[70px] md:mt-5 flex flex-col md:flex-row md:justify-center items-center gap-10">
    //       <input
    //         type="file"
    //         className="file-input file-input-bordered file-input-info w-full max-w-xs"
    //         id="file"
    //       />
    //       <label htmlFor="file" className=" myLabel bg-primary cursor-pointer">
    //         <BiImageAdd />
    //       </label>
    //       <button className=" md:mb-6 w-[90px] h-[50px] px-3 border-2 border-zinc-300 rounded-2xl inline-block">
    //         <span className=" flex justify-center items-center gap-2 font-bold">
    //           <TfiPlus />
    //           label
    //         </span>
    //       </button>
    //     </div>
    //     <div className=" relative">
    //       <button
    //         onClick={() => toast.success("The contact is edited successfully.")}
    //         className=" absolute top-[-310px] right-[-45px] md:relative md:top-0 md:right-0 w-[100px] h-[50px] py-3 px-5 bg-primary text-white "
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </div>

    //   <Toaster
    //     position="bottom-center"
    //     toastOptions={{
    //       className: "",
    //       duration: 5000,
    //       style: {
    //         background: "#fff",
    //         color: "#1f3738",
    //       },

    //       // Default options for specific types
    //       success: {
    //         duration: 3000,
    //         theme: {
    //           primary: "green",
    //           secondary: "black",
    //         },
    //       },
    //     }}
    //   />
    // </div>
  )
}

export default EditHead
