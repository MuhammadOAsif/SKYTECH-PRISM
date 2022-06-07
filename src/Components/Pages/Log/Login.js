import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import facebook from "../../../Image/facebook.png";
import google from "../../../Image/google.png";
import github from "../../../Image/github.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-2/5 mt-16 p-8 mx-auto font-sans text-[#242B2E] border rounded-xl">
      <h1 className="mb-5 text-center">Login Your Account</h1>
      <div className="text-xl ">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="12">
              <Form.Control type="email" placeholder="Email" required />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="12">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <div>
          <div className="flex justify-between pt-3 pb-3">
            <div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
            </div>
            <div className="">
              <Link to="" className="no-underline">
                Forget password?
              </Link>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <p>Not Registered yet?</p>
            </div>
            <Link to="/signup" className="no-underline">
              Create an Account
            </Link>
          </div>
          <Button
            className="w-full"
            variant
            style={{
              backgroundColor: "#38CC77",

              color: "white",
              fontSize: "24px",
            }}
            size="lg"
          >
            Sign in
          </Button>

          <div className="flex gap-3 pt-4 text-center align-items-center">
            <div className="w-64 h-1 border-4"></div>
            <div>or</div>
            <div className="w-64 h-1 border-4"></div>
          </div>
          <div className="grid w-full grid-cols-2 gap-3">
            <div>
              <Button
                className="w-full"
                variant
                style={{
                  marginTop: "30px",
                  color: "white",
                  backgroundColor: "#38CC77",
                  fontSize: "24px",
                }}
                size="lg"
              >
                <div className="flex align-items-center">
                  <div>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={facebook}
                      alt=""
                    />{" "}
                  </div>

                  <div className="text-xl ps-2">Sign in with Facebook</div>
                </div>
              </Button>
            </div>
            <div>
              <Button
                className="w-full"
                variant
                style={{
                  marginTop: "30px",
                  color: "white",
                  backgroundColor: "#38CC77",
                  fontSize: "24px",
                }}
                size="lg"
              >
                <div className="flex align-items-center">
                  <div>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={github}
                      alt=""
                    />{" "}
                  </div>

                  <div className="text-xl ps-2">Sign in with Github</div>
                </div>
              </Button>
            </div>
          </div>
          <div>
            <Button
              className="w-full"
              variant
              style={{
                marginTop: "30px",
                color: "white",
                backgroundColor: "#38CC77",
                fontSize: "24px",
              }}
              size="lg"
            >
              <div className="flex justify-center align-items-center">
                <div>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={google}
                    alt=""
                  />{" "}
                </div>

                <div className="text-xl ps-2">Sign in with Google</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
