"use client";
import Location from "@/assets/icons/location";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Transition } from "@headlessui/react";
const NavBar = ({ isAuth }: { isAuth?: boolean }) => {
  const [isOpen, setOpen] = useState(false);
  const token = sessionStorage.getItem("userToken");

  return (
    <nav className="px-[40px] min-h-[100px] flex justify-between items-center sb-globalNav__nav bg-white">
      <div className="flex items-center space-x-6 font-bold text-[18px] cursor-pointer font-boldly">
        <Link href={"/"} className="pr-[50px] ">
          <Image src={"/logo.svg"} alt={"logo"} width={50} height={50} />
        </Link>
        {!isAuth && (
          <div className="hidden space-x-6 md:flex">
            <div>
              <p>Menu</p>
            </div>
            <div>
              <p>Reward</p>
            </div>

            <div>
              <p>Gift Cards</p>
            </div>
          </div>
        )}
      </div>
      {!isAuth && (
        <>
          <div className="hidden sm:block">
            <div className="ml6 flex items-center">
              <div className="flex mr6 ">
                <Link
                  className="sb-textLink text-noUnderline text-semibold sb-findAStorePin  pr3 flex"
                  href="https://www.starbucks.com/store-locator"
                >
                  <Location />
                  Find a store
                </Link>
              </div>
              {!token ? (
                <>
                  <Link
                    className="sb-button sb-button--default sb-button--black mr3"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="sb-button sb-button--positive sb-button--black"
                    href="/signup"
                  >
                    Join now
                  </Link>
                </>
              ) : (
                <Link
                  className="sb-button sb-button--positive sb-button--black"
                  href="/"
                >
                  Profile
                </Link>
              )}
            </div>
          </div>
          <div className="block sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </>
      )}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0 left-[100%]"
        enterTo="opacity-100 left-0"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100 left-[100%]"
        leaveTo="opacity-0 left-0"
        className="bg-black/30 w-full h-screen fixed top-[100px] left-0 z-50 block sm:hidden duration-100 transition-all"
      >
        <div className="h-full relative">
          <div className="w-4/5 h-full fixed right-0 bg-white">
            <div className="sb-hamburgerNavItem block text-noUnderline text-left text-md px5 py3 size12of12 space-y-6">
              <div>
                <p>Menu</p>
              </div>
              <div>
                <p>Rewards</p>
              </div>
              <div>
                <p>Gift Cards</p>
              </div>
            </div>
            <hr aria-hidden="true" className="sb-rule pt3 pb5 px5"></hr>
            <div className="px-4">
              {token ? (
                <>
                  <Link
                    className="sb-button sb-button--default sb-button--black mr3"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="sb-button sb-button--positive sb-button--black"
                    href="https://www.starbucks.com/account/create"
                  >
                    Join now
                  </Link>
                </>
              ) : (
                <Link
                  className="sb-button sb-button--positive sb-button--black"
                  href="/"
                >
                  Profile
                </Link>
              )}
            </div>
            <div className="flex px-4 mt-6 ">
              <Link
                className="sb-textLink text-noUnderline text-semibold sb-findAStorePin  pr3 flex"
                href="https://www.starbucks.com/store-locator"
              >
                <Location />
                Find a store
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default NavBar;
