import React from "react";
import DetailHead from "../Components/DetailHead";
import DetailSection from "../Components/DetailSection";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Detail = () => {
  const location = useLocation();
  //console.log(location);
  return (
    <Sidebar>
      <DetailHead contactDetail={location?.state} />
      <DetailSection contactDetail={location?.state}/>
    </Sidebar>
  );
};

export default Detail;
