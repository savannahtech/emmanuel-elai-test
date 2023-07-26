import Input from "@/components/Form/Input";
import FloatingLabelInput from "@/components/Form/Input";
import { TextInput } from "flowbite-react";

import React from "react";

const Page = () => {
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
            <form action="">
              <p>
                <span className="color-greenAccent">*</span>
                indicates required field
              </p>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                {<Input name="email" label="Username or Email" />}
              </div>
              <div className="sb-fieldBase overflow-hidden mt3 mb2">
                {<Input name="password" label="Password" />}
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

export default Page;
