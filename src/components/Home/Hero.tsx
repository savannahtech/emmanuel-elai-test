/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import classNames from "classnames";
import { Banner } from "@prisma/client";

const Hero = ({
  position = "left",
  data,
}: {
  position?: "left" | "right";
  data: Omit<Banner, "id">;
}) => {
  return (
    <div
      className={classNames(
        "bg-[#eb81a5] w-full flex sm:flex-row flex-col-reverse",
        {
          "flex-col-reverse sm:flex-row-reverse": position == "right",
        }
      )}
      style={{
        backgroundColor: data.backgroundColor,
      }}
    >
      <div
        className=" w-full md:w-[50%] flex flex-col items-center justify-center px-12 py-8 text-[#1e3932]"
        style={{
          color: data.textColor,
        }}
      >
        <div className="max-w-[80%] flex flex-col justify-center items-center space-y-4">
          <h1 className=" sb-heading mb4 xl text-semibold text-center">
            <span className="rich-text_text__APy_s rich-text_width__3DGrd rich-text_greenLinks__I4L5P">
              {data.title}
            </span>
          </h1>

          <p className="md rich-text_text__APy_s rich-text_width__3DGrd rich-text_greenLinks__I4L5P text-center">
            {data.content}
          </p>
          <Link
            className="sb-button sb-button--default sb-button--houseGreen mt5 border-[hsl(164,31%,17%)]"
            href={data.buttonLink}
            style={{
              minWidth: 35,
              minHeight: 35,
              borderColor: data.textColor,
            }}
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[50%] relative flex justify-center items-center md-size6of12">
        <img src={data.image} alt={data.alt} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
