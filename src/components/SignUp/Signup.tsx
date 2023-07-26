"use client";
import Input from "@/components/Form/Input";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Response } from "../SignIn/SignIn";

const SignUp = ({
  handleSubmit,
}: {
  handleSubmit: (data: Omit<User, "id">) => Promise<Response>;
}) => {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = await handleSubmit(input);
    if (user instanceof Error) {
      return toast.error(user.message);
    }
    toast.success("User Registered");
    router.push("/signin");
  }
  return (
    <div className="main___1o3Io pushFooterOutOfView___3sEnC">
      <div className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium py4 md-py7">
        <div className="sb-contentColumn__inner">
          <h1
            className="sb-heading text-lg text-bold text-center mb2"
            tabIndex={-1}
          >
            create an account
          </h1>
        </div>
      </div>

      <div
        className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium mb7 sb-animator-fade-appear-done sb-animator-fade-enter-done"
        style={{ transitionDelay: "100ms" }}
      >
        <div className="sb-contentColumn__inner column___16YAQ">
          <div className="sm-pt0 md-p5">
            <form onSubmit={onSubmit}>
              <p>
                <span className="color-greenAccent">*</span>
                indicates required field
              </p>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                <Input
                  name="username"
                  type="text"
                  label="Username"
                  value={input.username}
                  handleChange={handleChange}
                />
              </div>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  value={input.email}
                  handleChange={handleChange}
                />
              </div>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  value={input.password}
                />
              </div>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  handleChange={handleChange}
                  value={input.password}
                />
              </div>

              <div className="flex flex-column items-end">
                <div
                  className="visible sb-animator-fadeGrow-appear-done sb-animator-fadeGrow-enter-done"
                  style={{ transitionDelay: "100ms" }}
                >
                  <button
                    className="sb-frap sb-frap--centerSVG"
                    data-e2e="signInButton"
                    data-ga="event: account-signin-submit-click; sectionName: SignUp; inputName: Sign-In"
                    data-ga-event="click"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
