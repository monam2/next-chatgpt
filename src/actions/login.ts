"use server";

import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas/auth";
import bcrypt from "bcrypt";
import { createSession } from "./sessions";
import { redirect } from "next/navigation";

export async function login(
  _: unknown,
  formData: FormData,
) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errorMessage: "잘못된 입력값이 있습니다." };
  }

  // 2. 존재하는 사용자인지 체크
  const { email, password } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);
    console.log(existingUser);

    if (!existingUser) {
      return {
        errorMessage: "존재하지 않는 사용자입니다.",
      };
    }

    const {
      id,
      name,
      password: userPassword,
    } = existingUser;

    const passwordMatch = await bcrypt.compare(
      password,
      userPassword,
    );

    if (!passwordMatch) {
      return {
        errorMessage: "비밀번호가 일치하지 않습니다.",
      };
    }

    // 4. 세션 생성
    await createSession({
      id,
      name,
    });

    console.log("세션 생성 완료");
  } catch (err) {
    console.error(err);
    return { errorMessage: "1번 문제가 발생했습니다." };
  }

  redirect("/");
}
