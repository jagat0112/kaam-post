import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input, Button, Card } from "../../components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const [error, setError] = useState("");

  const { errors } = formState;

  const onSubmit = () => {
    console.log("formState");
  };
  return (
    <div>
      <Card>
        <h1>Sign in to NYC Kaam Kotha</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors && (
            <p className="error-message">{Object.values(errors)[0]?.message}</p>
          )}
          <Input
            label="Email"
            placeholder="Enter Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
          />
          <Button type="submit" className="btn-blue mt-5">
            CONTINUE
          </Button>
        </form>
        <div className="separator">or</div>

        <Button className="btn-regular mt-5 logo-signin">
          <FaFacebook />
          SIGN IN WITH FACEBOOK
        </Button>

        <Button className="btn-regular logo-signin">
          <FcGoogle />
          SIGN IN WITH GOOGLE
        </Button>

        <>
          <p>Don't have an account?</p>
          <Link to="/register">
            <Button className="btn-blue-reverse">REGISTER</Button>
          </Link>
        </>
      </Card>
    </div>
  );
};

export default Login;
