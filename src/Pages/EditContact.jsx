import React, { useState } from "react";
import { useLocation} from "react-router-dom";
import EditSection from "../Components/EditSection";
import EditHead from "../Components/EditHead";
import Sidebar from '../Components/Sidebar'


const EditContact = () => {
  const location = useLocation();
  const contactDetail = location.state;
  console.log(contactDetail);
 
  const [firstname,setFirstName]=useState(contactDetail?.name?.firstname);
  const [lastname,setlastName]=useState(contactDetail?.name?.lastname);
  const [email,setemail]=useState(contactDetail?.email);
  const [address,setAddress]=useState(contactDetail?.address?.city);
  const [phone,setPhone]=useState(contactDetail?.phone);



  return (
    <Sidebar>
    <EditHead contactDetail={contactDetail}/>
    <EditSection contactDetail={contactDetail} />
    </Sidebar>
    
  )}
           
export default EditContact;