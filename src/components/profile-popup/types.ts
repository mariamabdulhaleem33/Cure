import type { User } from "@/context/authContext";


export type DropdownProps = {
  user:User ;
  onClose?: () => void;
};

export type DropdownItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

