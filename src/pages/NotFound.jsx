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
      <div className=" vh-100 d-flex justify-content-center text-center align-items-center">
        <div>
          <h1>Not Found !</h1>
          <img src={Not} alt="not found " />
          <h5> hmmm... The page you are looking for does not exist</h5>

          <button className="btn btn-info my-3 " onClick={goBack}>Go back </button>
        </div>
      </div>
    
    </div>
  );
}
