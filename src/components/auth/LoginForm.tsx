"use client";

import { useActionState } from "react";
import { useFormValidate } from "@/hooks/useFormValidate";
import { ChangeEvent, useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Submit from "./Submit";
import { FormMessage } from "./FormMessage";
import { LoginSchema } from "@/schemas/auth";
import FormCard from "./FormCard";
import { login } from "@/actions/login";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [state, formAction] = useActionState(login, {
    errorMessage: "",
  });
  const { errors, validateField } =
    useFormValidate<TLoginFormErrors>(LoginSchema);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  useEffect(() => {
    if (state?.errorMessage) {
      toast.error(state?.errorMessage);
    }
  }, [state]);

  return (
    <FormCard
      title="로그인"
      footer={{
        label: "아직 계정이 없으신가요?",
        href: "/signup",
      }}
    >
      <form
        action={formAction}
        className="w-full flex flex-col space-y-6"
      >
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
          {errors?.email && (
            <FormMessage message={errors?.email[0]} />
          )}
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
          {errors?.password && (
            <FormMessage message={errors?.password[0]} />
          )}
        </div>
        <Submit>로그인</Submit>
      </form>
    </FormCard>
  );
}
