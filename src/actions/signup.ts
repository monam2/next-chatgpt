"use server";

import { getUserByEmail } from "@/data/user";
import { SignUpSchema } from "@/schemas/auth";

export const signUp = async (
  _: any,
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

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      errorMessage: "이미 존재하는 사용자입니다.",
    };
  }

  // 3. db에 회원 정보 저장

  // 4. 성공 / 실패 처리
};
