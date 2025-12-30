export type ClinicLocation = {
  lat: number;
  lng: number;
  address: string;
};

export type Specialization = {
  id: number;
  name: string;
  image?: string;
};

export type AvailabilitySlot = {
  date: string;
  from: string;
  to: string;
};

export type Doctor = {
  id: number;
  user_id: number;
  specializations_id: number;
  experience_years: number;
  license_number: string;
  session_price: string;
  about_me: string;
  availability_slots: AvailabilitySlot[];
  clinic_location: ClinicLocation;
  created_at: string;
  updated_at: string;
  specialization: Specialization;
  user?: User;
};

export type User = {
  id: number;
  name: string;
  profile_photo?: string;
  email: string;
  mobile_number: string;
};

export type FavoriteItem = {
  id: number;
  user_id: number;
  doctor_id: number;
  created_at: string;
  updated_at: string;
  user: User;
  doctor: Doctor;
};