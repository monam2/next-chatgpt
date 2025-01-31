"use server";

import { getUserByEmail } from "@/data/user";
import db from "@/db";
import { user } from "@/db/schema";
import { SignUpSchema } from "@/schemas/auth";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

export const signUp = async (
  _: unknown,
  formData: FormData,
) => {
  // 1. 유효성 검증
  const validateFields = SignUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errorMessage: "잘못된 입력값이 있습니다.",
    };
  }

  // 2. 존재하는 사용자인지 체크
  const { name, email, password } = validateFields.data;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        errorMessage: "이미 존재하는 사용자입니다.",
      };
    }

    const hashedPassword = await hash(password, 10);

    // 3. db에 회원 정보 저장
    await db.insert(user).values({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error(error);
    return { errorMessage: "문제가 발생했습니다." };
  }

  // 에러가 없으면 리다이렉트
  redirect("/login");

  // 4. 성공 / 실패 처리
};
