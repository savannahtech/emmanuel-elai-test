"use client";
import Input from "@/components/Form/Input";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export interface Response extends User {
  error: string;
}

const SignIn = ({
  handleSubmit,
}: {
  handleSubmit: (data: Pick<User, "email" | "password">) => Promise<Response>;
}) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const token = sessionStorage.getItem("userToken");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = await handleSubmit(input);
    if (user && user?.error) {
      return toast.error(user.error);
    }

    sessionStorage.setItem("userToken", user.id);
    toast.success("User Logged In");
    router.push("/");
  }
  useEffect(() => {
    if (token) router.push("/");
  }, [router, token]);
  return (
    <div className="main___1o3Io pushFooterOutOfView___3sEnC">
      <div className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium py4 md-py7">
        <div className="sb-contentColumn__inner">
          <h1
            className="sb-heading text-lg text-bold text-center mb2"
            tabIndex={-1}
          >
            Sign in or create an account
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
                {
                  <Input
                    name="email"
                    type="email"
                    label="Username or Email"
                    value={input.email}
                    handleChange={handleChange}
                  />
                }
              </div>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                {
                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    handleChange={handleChange}
                    value={input.password}
                  />
                }
              </div>

              <div className="flex flex-column items-end">
                <div
                  className="visible sb-animator-fadeGrow-appear-done sb-animator-fadeGrow-enter-done"
                  style={{ transitionDelay: "100ms" }}
                >
                  <button
                    className="sb-frap sb-frap--centerSVG"
                    data-e2e="signInButton"
                    data-ga="event: account-signin-submit-click; sectionName: SignIn; inputName: Sign-In"
                    data-ga-event="click"
                    type="submit"
                  >
                    Sign in
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

export default SignIn;
