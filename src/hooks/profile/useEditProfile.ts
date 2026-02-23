import { useAuth } from "@/context/authContext";
import { useProfileImage } from "@/context/ProfileImgContext";
import { useState } from "react";
import toast from "react-hot-toast";

export const useEditProfile = () => {
  const { user, setUser } = useAuth();
  const { selectedFile } = useProfileImage();
  const [isSaving, setIsSaving] = useState(false);


  const editProfile = async (data: any) => {
    setIsSaving(true);

    const birthDate =
      data.birth_date?.day && data.birth_date?.month && data.birth_date?.year
        ? `${data.birth_date.year.padStart(4, "0")}-${data.birth_date.month.padStart(
            2,
            "0"
          )}-${data.birth_date.day.padStart(2, "0")}`
        : null;

    let avatarUrl = user?.avatarUrl || null;

    if (selectedFile) {
      avatarUrl = await fileToBase64(selectedFile);  
    }

    const updatedUser = {
      ...user,
      name: data.name,
      email: data.email,
      mobile_number: data.mobile_number,
      address: data.location || null,
      birthdate: birthDate,
      avatarUrl,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsSaving(false);
    toast.success("Profile updated successfully!");
  };

  return { editProfile, isSaving };
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};