import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditSection from "../Components/EditSection";
import EditHead from "../Components/EditHead";
import Sidebar from "../Components/Sidebar";
import toast from "react-hot-toast";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contactDetail = location.state;
  console.log(contactDetail);

  if (!contactDetail) {
    navigate("/");
    return null;
  }

  const [firstname, setFirstName] = useState(contactDetail?.firstName || "");
  const [lastname, setLastName] = useState(contactDetail?.lastName || "");
  const [email, setEmail] = useState(contactDetail?.email || "");
  const [phone, setPhone] = useState(contactDetail?.phone || "");
  const [showM, setShowM] = useState(false);
  const [birthday, setBirthday] = useState(contactDetail?.birthDate || "");

  const [companyName, setCompanyName] = useState(
    contactDetail?.company?.name || "",
  );
  const [jobTitle, setJobTitle] = useState(contactDetail?.company?.title || "");
  const [companyDepartment, setCompanyDepartment] = useState(
    contactDetail?.company?.department || "",
  );

  const [streetAddress, setStreetAddress] = useState(
    contactDetail?.address?.address || "",
  );
  const [city, setCity] = useState(contactDetail?.address?.city || "");

  const handleSave = () => {
    const updatedContact = {
      ...contactDetail,
      firstName: firstname,
      lastName: lastname,
      email,
      phone,
      birthDate: birthday,
      company: {
        ...contactDetail.company,
        name: companyName,
        title: jobTitle,
        department: companyDepartment,
      },
      address: {
        ...contactDetail.address,
        address: streetAddress,
        city,
      },
    };

    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    if (savedContacts.length === 0) {
      toast.error("No contacts found in localStorage");
      return;
    }

    const updatedContacts = savedContacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact,
    );

    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    toast.success("Contact updated successfully");
    navigate("/");
  };

  return (
    <Sidebar>
      <EditHead
        contactDetail={contactDetail}
        firstname={firstname}
        lastname={lastname}
        handleSave={handleSave}
      />
      <EditSection
        firstname={firstname}
        setFirstName={setFirstName}
        lastname={lastname}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        birthday={birthday}
        setBirthday={setBirthday}
        companyName={companyName}
        setCompanyName={setCompanyName}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        companyDepartment={companyDepartment}
        setCompanyDepartment={setCompanyDepartment}
        streetAddress={streetAddress}
        setStreetAddress={setStreetAddress}
        city={city}
        setCity={setCity}
        showM={showM}
        setShowM={setShowM}
      />
    </Sidebar>
  );
};

export default EditContact;
