/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import classNames from "classnames";
import { Banner } from "@prisma/client";
import { prisma } from "@/db";
import { HeroItem } from "./HeroItem";
async function getNoOfClicks(data: Banner) {
  const click = await prisma.clickedButton.findFirst({
    where: {
      bannerId: data.id,
    },
    include: {
      banner: true,
    },
  });
  return click;
}
async function increaseNoOfClicks(data: Banner) {
  "use server";
  let click = await getNoOfClicks(data);

  if (!click)
    await prisma.clickedButton.create({
      data: {
        buttonText: data.buttonText,
        bannerId: data.id,
        noOfClicks: 1,
      },
    });
  else
    await prisma.clickedButton.update({
      where: {
        id: click.id,
      },
      data: {
        noOfClicks: click.noOfClicks + 1,
      },
    });
  return await prisma.clickedButton.findFirst({
    where: {
      bannerId: data.id,
    },
  });
}
const Hero = async ({
  position = "left",
  data,
}: {
  position?: "left" | "right";
  data: Banner;
}) => {
  return <HeroItem {...{ data, position, increaseNoOfClicks }} />;
};

export default Hero;
