import React, { isValidElement, useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormErrors("All fields are required");
    }
    if (email.includes("@")) {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        defaultValue={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        defaultValue={email}
        onChange={onEmailChange}
        type="email"
        placeholder="Email"
        required
      />
      <input
        defaultValue={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
