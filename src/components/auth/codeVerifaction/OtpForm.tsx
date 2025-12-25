import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import InputError from "@/components/ui/InputError";
import { otpSchema, type otpType } from "@/schemas/otp.schema";
import { otpFn } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const OtpForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const phone = location.state.phone.data.phone;
    const { control, handleSubmit, register, formState: { errors }, setError
    } = useForm<otpType>({
        mode: 'onChange',
        resolver: zodResolver(otpSchema),
    });
    const { mutate } = useMutation({
        mutationFn: otpFn,
        onSuccess: (data) => {
            console.log('done', data)
            navigate('/login')
        },
        onError: (error: AxiosError ) => {
            const serverErrors = error?.response?.data?.errors ;
            if (serverErrors) {
                Object.keys(serverErrors).forEach((key) => {
                    setError(key as keyof otpType, {
                        message: serverErrors[key][0],
                    });
                });
            }
        }

    });
    const onSubmit: SubmitHandler<otpType> = (data) => {
        mutate(data)
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-76.25 mx-auto flex flex-col gap-8">
            <div className="space-y-2">
                <Controller
                    name="otp"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <InputOTP
                            maxLength={4}
                            value={field.value}
                            onChange={field.onChange}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    )}
                />
                <InputError error={errors.otp} />
                <input type="hidden" defaultValue={phone} {...register("phone")} />
            </div>
            <p className="text-[14px] ">Resend code in <span className="text-primary">55</span> s</p>
            <button type="submit" className="bg-primary text-white rounded-[10px] py-2 cursor-pointer w-full "> verify</button>

        </form>
    )
}

export default OtpForm
