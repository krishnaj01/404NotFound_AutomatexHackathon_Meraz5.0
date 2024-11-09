import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../HomePage/Button";

const LandingHeader = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = async (tokenInfo) => {
    const accessToken = tokenInfo?.access_token;

    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      setOpenDialog(false);
      window.location.reload();
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  return (
    <>
      {/* Div 1: Visible on small screens, hidden on medium and larger screens */}
      <div className="hidden md:block">
        {!user ? (
          <div className="p-3 shadow-sm flex justify-between items-center px-5">
            <a href="/">
              <div className="flex gap-3 items-center cursor-pointer">
                <img src="/vite.svg" className="h-16" alt="logo" />
                <h2 className="font-bold text-3xl font-serif">Lost-Found</h2>
              </div>
            </a>
            <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
          </div>
        ) : (
          <div className="flex items-center justify-between h-16 sm:h-[10vh] px-4 sm:px-8 shadow-sm">
            <div className="flex space-x-40 w-full sm:w-[40%] justify-center">
              <Buttons buttonText="Home" />
              <Buttons buttonText="Lost" />
            </div>

            <div className="flex justify-center w-[15%] sm:w-[10%]">
              <img src="/logo.png" alt="logo" className="h-10 sm:h-10" />
            </div>

            <div className="flex space-x-40 w-full sm:w-[40%] justify-center">
              <Buttons buttonText="Found" />
              <Popover>
                <PopoverTrigger>
                  <div>
                    <div className="flex gap-5 items-center">
                      <Buttons buttonText="Profile" />
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt="profile"
                          className="h-[35px] w-[35px] rounded-full"
                        />
                      ) : (
                        <img
                          src="/vite.svg"
                          alt="profile"
                          className="h-[35px] w-[35px] rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div>
                    <h2 className="font-bold text-xl mt-2">{user.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{user.email}</p>
                    <div
                      onClick={() => {
                        googleLogout();
                        localStorage.clear();
                        window.location.replace("/");
                      }}
                    >
                      <Button className="w-full">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        )}

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="text-center">
                <img src="/vite.svg" alt="logo" className="mx-auto h-16" />
                <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
                <p>Sign in to the app with Google authentication securely</p>
                <Button
                  className="w-full mt-5 flex gap-4 items-center"
                  onClick={login}
                >
                  <FcGoogle style={{ height: "28px", width: "28px" }} />
                  Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {/* Div 2: Hidden on small screens, visible on medium and larger screens */}
      <div className="flex items-center justify-between h-16 px-4 sm:px-8 md:hidden">
        <div className="flex justify-center w-[15%] sm:w-[10%]">
          <img src="/logo.png" alt="logo" className="h-10 sm:h-10" />
        </div>

        <Popover>
          <PopoverTrigger>
            <div>
              <div className="flex gap-5 items-center">
                <Buttons buttonText="Profile" />
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt="profile"
                    className="h-[35px] w-[35px] rounded-full"
                  />
                ) : (
                  <img
                    src="/vite.svg"
                    alt="profile"
                    className="h-[35px] w-[35px] rounded-full"
                  />
                )}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <h2 className="font-bold text-xl mt-2">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{user.email}</p>
              <div className="hover:bg-purple-300 bg-gray-100 text-center p-2 rounded-md cursor-pointer transition-colors duration-200">
                Home
              </div>
              <div className="hover:bg-purple-300 bg-gray-100 text-center p-2 rounded-md cursor-pointer transition-colors duration-200">
                Lost
              </div>
              <div className="hover:bg-purple-300 bg-gray-100 text-center p-2 rounded-md cursor-pointer transition-colors duration-200">
                Found
              </div>
              <div className="hover:bg-purple-300 bg-gray-100 text-center p-2 rounded-md cursor-pointer transition-colors duration-200">
                Profile
              </div>
              <div
                onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.replace("/");
                }}
              >
                <Button className="w-full">Logout</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>

  );
};

export default LandingHeader;
