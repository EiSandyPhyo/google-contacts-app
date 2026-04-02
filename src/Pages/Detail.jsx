import React from "react";
import DetailHead from "../Components/DetailHead";
import DetailSection from "../Components/DetailSection";
import { useLocation, useNavigate } from "react-router-dom";
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
    navigate("/");
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
