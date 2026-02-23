import { useMutation } from "@tanstack/react-query";
import { signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useState } from "react";

type SendOtpParams = {
  phone: string;
  appVerifier: any;
};

export const useOtp = () => {
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const sendOtpMutation = useMutation({
    mutationFn: async ({ phone, appVerifier }: SendOtpParams) => {
      return await signInWithPhoneNumber(auth, phone, appVerifier);
    },
    onSuccess: (result) => {
      setConfirmationResult(result);
    },
  });

  return {
    sendOtpMutation,
    confirmationResult,
  };
};
