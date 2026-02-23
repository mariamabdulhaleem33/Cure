import { useEffect, useRef } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useOtp } from "../hooks/useOtp";

type Props = {
  mobile_number?: string;
};

const OtpForm = ({ mobile_number }: Props) => {
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);
  const { sendOtpMutation } = useOtp();

  useEffect(() => {
    if (!mobile_number) return;
    if (recaptchaRef.current) return;

    recaptchaRef.current = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    const formattedPhone = mobile_number.startsWith("0")
      ? `+2${mobile_number.slice(1)}`
      : `+2${mobile_number}`;

    sendOtpMutation.mutate({
      phone: formattedPhone,
      appVerifier: recaptchaRef.current,
    });
  }, [mobile_number]);

  if (!mobile_number) {
    return <p>رقم الهاتف غير متوفر</p>;
  }

  return (
    <>
      <div id="recaptcha-container" />
      <h2>أدخل كود التحقق</h2>
      {/* input otp هنا */}
    </>
  );
};

export default OtpForm;
