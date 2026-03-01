// hooks/useAuth.ts
import { useMutation } from "@tanstack/react-query";
import { loginWithEmail } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";

export type LoginCredentials = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      loginWithEmail(email, password),

    onSuccess: (data) => {
      localStorage.setItem("authToken", data.token);
      navigate("/");
    },
  });
};