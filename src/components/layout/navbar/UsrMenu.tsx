import React, { useState, useRef, useEffect } from "react";
import DropDown from "../../profile-popup/DropDown";
import SignInSignUpDropdown from "../../profile-popup/SignInSignUpDropdown";
import { useMediaQuery } from "@/hooks/useMatchMediaQuery";
import { useAuth } from "@/context/authContext";
import { UserAvatar } from "@/components/ui/UserAvatar";

const UserMenu: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLargeScreen } = useMediaQuery("(min-width: 768px)");
  const { user, isAuthenticated, isLoading } = useAuth();

  const handleClose = () => setShowDropdown(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLargeScreen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setShowDropdown(false);
        }
      }
    };

    if (showDropdown && isLargeScreen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, isLargeScreen]);

  if (isLoading) return null; // أو Spinner لو حابة

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors overflow-hidden"
          aria-label="Open user menu"
          aria-expanded={showDropdown}
          aria-haspopup="true"
        >
          {isAuthenticated && user ? (
            <UserAvatar
              avatarUrl={user.avatarUrl || ""}
              name={user.name || "User"}
              size="sm"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-semibold text-sm">?</span>
            </div>
          )}
        </button>

        {showDropdown && (
          <div className="hidden md:block absolute right-0 top-12 z-50">
            {isAuthenticated && user ? (
              <DropDown user={user} onClose={handleClose} />
            ) : (
              <SignInSignUpDropdown onClose={handleClose} />
            )}
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      {showDropdown && (
        <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
            {isAuthenticated && user ? (
              <DropDown user={user} onClose={handleClose} />
            ) : (
              <SignInSignUpDropdown onClose={handleClose} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;