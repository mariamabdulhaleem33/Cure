
import OtpForm from "@/components/auth/codeVerifaction/OtpForm";
import SignUpBg from "@/components/auth/signup/SignUpBg";
import Logo from "@/components/layout/navbar/Logo";
import AuthFormHeading from "@/components/ui/AuthFormHeading";
import { useLocation } from "react-router-dom";

const Otp = () => {
     const { state } = useLocation() as {
    state?: { mobile_number?: string };
  };
  console.log(state)
  return (
    <div className=" flex min-h-screen max-w-full  items-center justify-center lg:justify-around">
      <div className="fixed top-9 left-12.5 bg-white ">
        <Logo />
      </div>
      <div>
        <div className=" w-105 relative flex justify-center  lg:left-0 mx-auto overflow-hidden text-center">
          <div className="w-76.5">
            <AuthFormHeading title="Code Verification" />
            <p className="text-[14px] text-[#404448] mt-3">
              Code has been send to your phone number
            </p>
            <p className="text-[12px] text-[#1490E3] ">
              Check your phone number
            </p>
            <OtpForm mobile_number={state?.mobile_number} />
          </div>
        </div>
      </div>
      <div>
        <SignUpBg />
      </div>
    </div>
  );
};

export default Otp;
