import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (event) => {
    console.log(event);
  };
  return (
    <div>
      <div className="w-2/5 mt-16  p-6 mx-auto font-sans text-[#242B2E] border shadow-sm mb-16 rounded-3x">
        <h1 className="mb-4 text-center">Create A New Account</h1>
        <div className="text-xl ">
          <form onSubmit={handleSignup}>
            <div className="grid gap-y-8">
              <div>
                <label htmlFor="">Name</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="text"
                  name="Name"
                  id=""
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="text"
                  name="text"
                  id=""
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Address</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="text"
                  name="Address"
                  id=""
                  placeholder="Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="password"
                  name="Password"
                  id=""
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Confirm Password</label>
                <input
                  className="w-full p-2 mt-2 text-xl text-black rounded border"
                  type="password"
                  name="Confirm Password"
                  id=""
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between pt-3 pb-3">
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree to the Terms And Conditions"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="flex gap-1 mt-3">
                  <div>
                    <p>Already have an Account?</p>
                  </div>
                  <Link to="/login" className="no-underline">
                    Login
                  </Link>
                </div>
              </div>
              <div>
                <input
                  type="button"
                  value="Sign up"
                  className="w-full p-3 rounded"
                  style={{
                    backgroundColor: "#24304c",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    color: "white",
                    fontSize: "24px",
                  }}
                  size="lg"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
