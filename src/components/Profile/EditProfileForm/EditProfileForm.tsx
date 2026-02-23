import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import BirthdaySelector from "./BirthdaySelector";
import { useEffect, type FC } from "react";
import { useForm } from "react-hook-form";
import {
  editProfileSchema,
  type editProfileType,
} from "@/schemas/profile/edit-profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/ui/InputError";
import EditFormSkelton from "./skelton/EditFormSkelton";
import { useEditProfile } from "@/hooks/profile/useEditProfile";
import { useAuth } from "@/context/authContext";
import { Loader2 } from "lucide-react";
import { formatLocation } from "@/utils/formatLocation";

const EditProfileForm: FC = () => {
  const { user } = useAuth();
  const { editProfile, isSaving } = useEditProfile();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<editProfileType>({
    mode: "onChange",
    resolver: zodResolver(editProfileSchema),
  });

  const onSubmit = async (data: editProfileType) => {
    await editProfile(data);
  };

  useEffect(() => {
    if (user) {
      let birthDateValues = {
        day: "",
        month: "",
        year: "",
      };
      if (user.birthdate) {
        const [year, month, day] = user.birthdate.split("-");
        birthDateValues = { year, month, day };
      }
      reset({
        name: user.name || "",
        email: user.email || "",
        mobile_number: user.mobile_number || "",
        location: formatLocation(user?.address) || "",
        birth_date: birthDateValues,
      });
    }
  }, [user, reset]);

  return (
    <>
      {!user && <EditFormSkelton />}
      <form
        className=" grid grid-cols-1 lg:grid-cols-2 grid-rows-7 lg:grid-rows-5 gap-x-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="col-span-2 text-2xl font-secondary lg:text-3xl text-slate-900">
          Personal information
        </p>
        <div className="col-span-2 lg:col-span-1 h-25 flex flex-col justify-start items-start gap-2">
          <Label htmlFor="name" className="font-normal text-slate-900">
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Full Name"
            {...register("name")}
          />
          {errors.name && InputError({ error: errors.name })}
        </div>

        <div className="h-25 col-span-2 lg:col-span-1 flex flex-col justify-start items-start gap-2">
          <Label htmlFor="mobile_number" className="font-normal text-slate-900">
            Phone Number
          </Label>
          <Input
            type="text"
            id="mobile_number"
            placeholder="Phone Number"
            {...register("mobile_number")}
          />
          {errors.mobile_number && InputError({ error: errors.mobile_number })}
        </div>
        <div className="h-25 col-span-2 lg:col-span-1 flex flex-col justify-start items-start gap-2">
          <Label htmlFor="email" className="font-normal text-slate-900">
            Email
          </Label>
          <Input
            readOnly
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && InputError({ error: errors.email })}
        </div>
        <div className="h-25 col-span-2 lg:col-span-1 flex flex-col justify-start items-start gap-2">
          <Label htmlFor="email" className="font-normal text-slate-900">
            Your birthday
          </Label>
          <BirthdaySelector control={control} />
          {errors.birth_date && InputError({ error: errors.birth_date })}
        </div>
        <div className="h-25 col-span-2 flex flex-col justify-start items-start gap-2">
          <Label htmlFor="location" className="font-normal text-slate-900">
            Location
          </Label>
          <Input
            type="text"
            id="location"
            placeholder="City, Country"
            {...register("location")}
          />
          {errors.location && InputError({ error: errors.location })}
        </div>
        <div className=" col-span-2 lg:col-span-1 w-full lg:col-start-2 flex flex-col justify-center items-end">
          <Button
            disabled={isSaving}
            className="shadow-sm w-full bg-sky-700 hover:bg-sky-800"
          >
            {isSaving ? (
              <>
                Saving
                <Loader2 className="animate-spin mr-2" />
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};
export default EditProfileForm;
