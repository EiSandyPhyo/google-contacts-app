import React from "react";
import { useState } from "react";
import { useGetContactQuery } from "../redux/api/contactApi";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {RxCross2} from "react-icons/rx"

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData,setFilterData]=useState([]);
  const getallUsers = useGetContactQuery();
  //console.log(getallUsers?.data?.users);
  const allUsers = getallUsers?.data?.users;

  const handleFilter=(e)=>{
    const searchWord=e.target.value;
    setSearch(searchWord);
    const newFilter=allUsers?.filter((filteredData)=>{
        return filteredData?.firstName.toLowerCase().includes(searchWord.toLowerCase());
    })
    if(searchWord===""){
        setFilterData([]);
    }else{
        setFilterData(newFilter);
    }
  }
  const clearInput=()=>{
    setFilterData([]);
    setSearch("");
  }


//   const filterContact = allUsers?.filter((searchUser) =>
//     searchUser?.firstName.toLowerCase().includes(search.toLowerCase())
//   );
//   console.log(filterContact);

  return (
    <>
      <div className=" relative hidden lg:flex items-center border shadow-sm gap-1 px-2 py-2 rounded ">
        <input
          type="text"
          className="   outline-none rounded lg:w-96  text-black"
          placeholder="Search"
          value={search}
          onChange={handleFilter}
          //onChange={} //you should use debounce
        />
        <div className="">
            {filterData?.length===0 ?(
                <BiSearchAlt className=" text-black w-6 h-6 cursor-pointer" />
            ):(
                <p className=" text-black" onClick={clearInput}>
                    <RxCross2 className="cursor-pointer"/>
                </p>
            )
        }
        </div>
        {filterData.length!=0 &&(
        <div className=" absolute top-14 shadow-lg bg-white w-40">
            {filterData.slice(0,10).map((value,key)=>{
                return(
                    <Link to={`/search/${value?.id}`  } state={value} className="dataItem py-2" onClick={console.log(value)} >
                        <p className="text-black">{value?.firstName}</p>
                    </Link>
                )
            })}
        </div>
      )}
     
      </div>
     
     








      <div className=" lg:hidden">
        <input
          type="text"
          value={search}
          onChange={handleFilter}
          className={
            showInput
              ? "block py-2 px-1 outline-none rounded  lg:hidden text-black border"
              : "hidden"
          }
          placeholder="search"
        />
        <div className=" lg:none">
            {filterData?.length===0 ?(
                <button
                onClick={() => setShowInput(!showInput)}
                className=" lg:hidden mx-2 p-2"
              >
                <BiSearchAlt className="  text-black w-6 h-5" />
              </button>
            ):(
                <p className=" text-black lg:hidden ps-1" onClick={clearInput}>
                    <RxCross2/>
                </p>
            )
        }
        </div>
        {filterData.length!=0 &&(
        <div className=" absolute top-14 shadow-lg bg-white w-40 lg:hidden ">
            {filterData.slice(0,10).map((value,key)=>{
                return(
                    <Link to={`/search/${value?.id}`  } state={value} className="dataItem py-2" onClick={console.log(value)} >
                        <p className="text-black">{value?.firstName}</p>
                    </Link>
                )
            })}
        </div>
      )}
        
      </div>
    </>
  );
};

export default Search;
