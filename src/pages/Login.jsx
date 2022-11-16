import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Login() {
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };
  const handleSelect = (e) => {
    setUsertype(e);
  };
  const [showSignup, setShowSignup] = useState(true);
  const [userType, setUsertype] = useState("CUSTOMER");
  return (
    <div className="bg-info vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card p-3 rounded-4 shadow-lg"
        style={{ width: 18 + "rem " }}
      >
        <h4 className="text-center ">{showSignup ? "Sign Up " : "Login "}</h4>
        <form>
          <div className="input-group m-1">
            <input
              type="text"
              className="form-control"
              placeholder="User Id "
            />
          </div>

          {showSignup && (
            <>
              <div className="input-group m-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username   "
                />
              </div>
              <div className="input-group m-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email  "
                />
              </div>
              <div className="d-flex justify-content-between ">
                <div className="m-1">{userType}</div>
                <DropdownButton
                  align="end"
                  id="userType"
                  title={userType}
                  variant="light"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey={"Customer"}>Customer</Dropdown.Item>
                  <Dropdown.Item eventKey={"Enginner"}>Engineer</Dropdown.Item>
                </DropdownButton>
              </div>
            </>
          )}
          <div className="input-group m-1">
            <input
              type="password"
              className="form-control"
              placeholder="Password  "
            />
          </div>
          <div className="input-group m-1">
            <input
              type="submit"
              className=" btn btn-info form-control m-1 fw-bolder"
              value={showSignup ? "Sign Up " : "Log In"}
            />
          </div>
          <div className="m-1 text-center" onClick={toggleSignup}>
            {showSignup
              ? "Already have an account ? Login "
              : "Don't have account ? SignUp"}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
