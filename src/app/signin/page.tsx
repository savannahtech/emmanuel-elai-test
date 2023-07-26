import SignIn, { Response } from "@/components/SignIn/SignIn";
import { prisma } from "@/db";
import { User } from "@prisma/client";
import React from "react";
import * as bcryptjs from "bcryptjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const handleSubmit = async (
    data: Pick<User, "email" | "password">
  ): Promise<Response> => {
    "use server";
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user)
      return {
        ...{ id: "", email: "", password: "", username: "" },
        error: "User Does Not Exits",
      };
    const isMatched = await bcryptjs.compare(data.password, user.password);
    if (!isMatched) return { ...user, error: "Incorrect Password" };
    return { ...user, error: "" };
  };

  return (
    <div>
      <SignIn handleSubmit={handleSubmit} />
    </div>
  );
};

export default Page;
