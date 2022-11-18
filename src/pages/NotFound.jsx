import React from "react";
import { useNavigate } from "react-router-dom";
import Not from "../Static/Not.svg";

export default function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="d-flex justify-content-center text-center align-items-center">
        <div>
          <h1>Not Found </h1>
          <img src={Not} alt="not found " />
          <p> hmmm... The page are looking for does not exist</p>

          <button onClick={goBack}>Go back </button>
        </div>
      </div>
      <div className="text-center "></div>
    </div>
  );
}
