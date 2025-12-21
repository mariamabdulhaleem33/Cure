import { bgSignUp1 } from "../../../assets/index"
import { bgSignUp2 } from "../../../assets/index"


const SignUpBg = () => {
  return (
    <div   className={`relative w-212 ml-auto`}>
      <img src={bgSignUp2} alt="" className="w-full max-h-screen  object-cover " />
      <img src={bgSignUp1} alt="" className="w-full max-h-screen   object-cover absolute right-0 top-0 z-100" />
    </div> 
  )
}

export default SignUpBg
