import React from "react";

const Register = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <p>Email</p>
      <input type="email" name="email" onChange={onChangeForm} />
      <p>Password</p>
      <input type="password" name="password" onChange={onChangeForm} />
      <button>Register</button>
    </>
  );
};

export default Register;
