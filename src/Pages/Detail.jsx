import React from "react";
import DetailHead from "../Components/DetailHead";
import DetailSection from "../Components/DetailSection";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Sidebar from "../Components/Sidebar";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contactDetail = location?.state;
  console.log(location);

  if (!contactDetail) {
    navigate("/");
    return null;
  }

  const handleDeleteContact = (id) => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const updatedContacts = savedContacts.filter(
      (contact) => contact.id !== id,
    );

    //setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    toast.success("Contact deleted successfully", {
      duration: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <Sidebar>
      <DetailHead
        contactDetail={contactDetail}
        handleDeleteContact={handleDeleteContact}
      />
      <DetailSection contactDetail={contactDetail} />
    </Sidebar>
  );
};

export default Detail;
