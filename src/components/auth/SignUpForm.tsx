"use client";

import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormCard from "./FormCard";
import Submit from "./Submit";
import { useFormValidate } from "@/hooks/useFormValidate";
import { SignUpSchema } from "@/schemas/auth";
import { FormMessage } from "./FormMessage";
import { useFormState } from "react-dom";

export default function SignUpForm() {
  const [error, action] = useFormState(SignUpForm, undefined);
  const { errors, validateField } =
    useFormValidate<TSignupFormErrors>(SignUpSchema);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  console.log(errors);

  return (
    <FormCard
      title="회원가입"
      footer={{ label: "이미 계정이 있으신가요?", href: "/" }}
    >
      <form action={action} className="w-full flex flex-col space-y-6">
        <div className="w-full space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={handleChange}
            error={!!errors?.name}
          />
          {errors?.name && <FormMessage message={errors?.name[0]} />}
        </div>
        <div className="w-full space-y-1">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            error={!!errors?.email}
          />
          {errors?.email && <FormMessage message={errors?.email[0]} />}
        </div>
        <div className="w-full space-y-1">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
            error={!!errors?.password}
          />
          {errors?.password && <FormMessage message={errors?.password[0]} />}
        </div>
        <Submit>회원가입</Submit>
      </form>
    </FormCard>
  );
}
