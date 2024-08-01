import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input, Button, Card } from "../../components";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const Register = () => {
  return (
    <div>
      <Card>
        <h1>Sign up to NYC Kaam Kotha</h1>
        <Input label="Email" placeholder="Enter Email" />
        <Input label="Password" type="password" placeholder="Enter Password" />
        <Button className="btn-blue mt-5">CONTINUE</Button>
        <div class="separator">or</div>

        <Button className="btn-regular mt-5 logo-signin">
          <FaFacebook />
          SIGN UP WITH FACEBOOK
        </Button>

        <Button className="btn-regular logo-signin">
          <FcGoogle />
          SIGN UP WITH GOOGLE
        </Button>

        <>
          <p>Already have an account?</p>
          <Link to="/login">
            <Button className="btn-blue-reverse">LOGIN</Button>
          </Link>
        </>
      </Card>
    </div>
  );
};

export default Register;
