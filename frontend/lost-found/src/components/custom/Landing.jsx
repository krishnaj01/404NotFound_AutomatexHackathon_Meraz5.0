import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaUsers } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const Landing = () => {
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
      window.location.replace("/create-trip");
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  return (
    <>
      <div className="flex items-center mx-24 md:mx-48 gap-5 flex-col-reverse md:flex-row">
        <div className="flex flex-col items-center gap-9 mb-16">
          <h1 className="font-extrabold text-[60px] text-center mt-16">
            <div className="text-[#b542da]">Lost Something ?</div> We are here
            to bring it back
          </h1>
          <div>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-500 text-center">
              Do you have something to report, to help, any one today?
            </p>
            <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-500 text-center">
              Post it at Lost & Found, its free, for global people and very easy
              to use!
            </p>
          </div>

          <Link to={!user ? "/" : "/create-trip"}>
            <Button
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              Get Started, It's Free
            </Button>
          </Link>

          <Dialog open={openDialog}>
            <DialogClose asChild={openDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <img src="/logo.png" alt="logo" />
                    <h2 className="font-bold text-lg mt-7">
                      Sign In with Google
                    </h2>
                    <p>
                      Sign in to the app with Google authentication securely
                    </p>
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
            </DialogClose>
          </Dialog>
        </div>
        <img src="./lost-found.png" className="w-80 h-80"></img>
      </div>
      <div className="flex justify-center gap-36 md:gap-96">
        <div className="bg-purple-900 items-center gap-3 mb-20 flex text-white p-10 rounded-xl hover:bg-white hover:text-purple-900 hover: border border-purple-900 font-bold text-6xl">
              <div>
              <MdOutlineContentPasteSearch />
              </div>
              <div className="text-xl">
                1000
              </div>
        </div>
        <div className="bg-purple-900 items-center gap-3 mb-20 flex text-white p-10 rounded-xl hover:bg-white hover:text-purple-900 hover: border border-purple-900 font-bold text-6xl">
            <div>
            <FaUsers />
            </div>
            <div className="text-xl">
              1000
            </div>
        </div>
      </div>
      <div className="bg-black h-1 mx-24">.</div>
    </>
  );
};

export default Landing;
