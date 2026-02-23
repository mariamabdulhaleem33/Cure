import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  signInWithPhoneNumber,
  type ConfirmationResult,
  type ApplicationVerifier,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";

export const signUpFn = async ({
  name,
  email,
  password,
  mobile_number,
}: {
  email: string;
  password: string;
  mobile_number: string;
  name: string;
}) => {
  await createUserWithEmailAndPassword(auth, email, password);
  return { mobile_number, name, email, password };
};

export const sendOtp = async ({
  phone,
  appVerifier,
}: {
  phone: string;
  appVerifier: ApplicationVerifier;
}): Promise<ConfirmationResult> => {
  return await signInWithPhoneNumber(auth, phone, appVerifier);
};

export const verifyOtpCode = async ({
  confirmationResult,
  code,
}: {
  confirmationResult: ConfirmationResult;
  code: string;
}) => {
  return await confirmationResult.confirm(code);
};

export const loginWithEmail = async (
  email: string,
  password: string
) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const token = await userCredential.user.getIdToken();

  return {
    user: userCredential.user,
    token,
  };
};