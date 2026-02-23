import AuthFormHeading from "@/components/ui/AuthFormHeading";
import GoogleButton from "@/components/ui/GoogleButton";
import InputAuth from "@/components/ui/InputAuth";
import OrDivider from "@/components/ui/OrDivider";
import InputError from "@/components/ui/InputError";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type typeForm } from "@/schemas/signup.schema";
import { signUpFn } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/authContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeForm>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: signUpFn,
    onSuccess: (_, variables) => {
      const userData = {
        name: variables.name,
        email: variables.email,
        mobile_number: variables.mobile_number,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/login");
    },
  });

  const onSubmit = (data: typeForm) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      mobile_number: data.mobile_number,
    });
  };

  return (
    <div className="w-[90%] mx-auto lg:w-105 flex flex-col my-20 p-2">
      <div className="w-full lg:w-92.75 mx-auto">
        <AuthFormHeading title="Sign up" />
        <p className="text-text-neutral-darker text-[12px]">
          Please provide all information required to create your account
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-94.5 mx-auto mt-5 flex flex-col gap-3"
      >
        <InputAuth
          type="text"
          id="name"
          placeholder="Full Name"
          register={register("name")}
        />
        <InputError error={errors.name} />

        <InputAuth
          type="email"
          id="email"
          placeholder="Email"
          register={register("email")}
        />
        <InputError error={errors.email} />

        <InputAuth
          type="text"
          id="mobile_number"
          placeholder="Phone number"
          register={register("mobile_number")}
        />
        <InputError error={errors.mobile_number} />

        <InputAuth
          type="password"
          id="password"
          placeholder="Password"
          register={register("password")}
        />
        <InputError error={errors.password} />

        <InputAuth
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          register={register("password_confirmation")}
        />
        <InputError error={errors.password_confirmation} />

        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-white rounded-[10px] py-2 flex justify-center items-center gap-2 disabled:opacity-50"
        >
          {isPending && <Spinner className="text-white w-6" />}
          Sign up
        </button>

        <OrDivider />
        <GoogleButton />

        <p className="text-center text-[12px]">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
