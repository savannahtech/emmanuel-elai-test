import SignUp from "@/components/SignUp/Signup";
import { prisma } from "@/db";
import { User } from "@prisma/client";
import React from "react";
import * as bcryptjs from "bcryptjs";
import { Response } from "@/components/SignIn/SignIn";
const handleSubmit = async (data: Omit<User, "id">): Promise<Response> => {
  "use server";

  const hashPassword = await bcryptjs.hash(
    data.password,
    bcryptjs.genSaltSync(10)
  );
  const oldUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (oldUser) return { error: "User Exist", ...oldUser };
  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashPassword,
    },
  });
  return { ...user, error: "" };
};
const Page = () => {
  return (
    <div>
      <SignUp handleSubmit={handleSubmit} />
    </div>
  );
};

export default Page;
