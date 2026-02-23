import AuthFormHeading from "@/components/ui/AuthFormHeading";
import InputAuth from "@/components/ui/InputAuth";
import InputError from "@/components/ui/InputError";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  type SignInFormType,
} from "@/schemas/signin.schema";
import { useLogin } from "@/hooks/useLogin";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  });

  const { mutate: login, isPending, isError, error } = useLogin();

  const onSubmit = (data: SignInFormType) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <AuthFormHeading title="Sign in" />

      {isError && (
        <p className="text-red-500 text-sm">
          {(error as Error).message}
        </p>
      )}

      <div>
        <InputAuth
          type="email"
          placeholder="Email"
          id="email"
          register={register("email")}
        />
        <InputError error={errors.email} />
      </div>

      <div>
        <InputAuth
          type="password"
          placeholder="Password"
          id="password"
          register={register("password")}
        />
        <InputError error={errors.password} />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-primary text-white rounded-md py-2 disabled:opacity-50"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}