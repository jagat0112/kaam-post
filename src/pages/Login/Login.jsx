import React from "react";
import { Input, Button, Card } from "../../components";

const Login = () => {
  return (
    <div>
      <Card>
        <h1>Sign in to NYC Kaam Kotha</h1>
        <Input label="Email" placeholder="Enter Email" />
        <Input label="Password" type="password" placeholder="Enter Password" />
        <Button name="Continue" />
      </Card>
    </div>
  );
};

export default Login;
