import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BiErrorAlt } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const allowedDomain = "iitbhilai.ac.in";

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

      const userEmail = res.data.email;
      const userDomain = userEmail.split("@")[1];

      // Check if the user email domain matches the allowed domain
      if (userDomain === allowedDomain) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        window.location.replace("/home");
      } else {
        console.error("Unauthorized domain");
        alert("Sign in is restricted to users from iitbhilai.ac.in domain.");
        googleLogout();
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  return (
    <>
      <div className="flex items-center mx-24 md:mx-48 gap-5 flex-col-reverse xl:flex-row">
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

          <Link to={!user ? "/" : "/home"}>
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
                    <img src="/lost-found.jpg" alt="logo" className="rounded-full" />
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
        <img src="./lost-found.jpg" className="w-80 rounded-full"></img>
      </div>
      <div className="bg-gray-200 flex px-12 sm:px-24 md:px-48 p-10 flex-col xl:flex-row gap-5 justify-between mb-20 mx-12 sm:mx-24 md:mx-48 rounded-xl items-center">
        <div>
          <Card>
            <div className="flex flex-col md:flex-row items-center text-6xl gap-3 text-purple-900 border p-5 rounded-lg hover:shadow-lg hover:scale-105 transition-all hover:border-purple-600 hover:bg-purple-200">
              <div>
                <MdOutlineContentPasteSearch />
              </div>
              <CardHeader>
                <CardTitle>1000</CardTitle>
                <CardDescription className="text-purple-900">
                  Lost and Found Cases
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <div className="flex flex-col md:flex-row items-center text-6xl gap-3 text-purple-900 border p-5 rounded-lg hover:shadow-lg hover:scale-105 transition-all hover:border-purple-600 hover:bg-purple-200">
              <div>
                <FaUsers />
              </div>
              <CardHeader>
                <CardTitle>1000</CardTitle>
                <CardDescription className="text-purple-900">
                  Users
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-black h-1 mx-24 mb-20">.</div>
      <h1 className="font-bold text-3xl text-center mb-10">How to start ?</h1>
      <div className="flex justify-center flex-col xl:flex-row gap-32 mx-12 sm:mx-24 md:mx-56 mb-20">
        <Card className="flex flex-col justify-center items-center gap-5 p-5 pt-10 hover:shadow-lg hover:scale-105 transition-all hover:border-purple-600">
          <div className="p-3 text-5xl rounded-full bg-purple-900 text-white">
            <TiUserAdd />
          </div>
          <h1 className="font-bold text-xl">Step 1: Register with us</h1>
          <p className="px-10">
            Don't know how to deal with lost or found items near you? Register
            with your name and email address .If you have registered already,
            you can use the same account for posting unlimited ads.
          </p>
        </Card>
        <Card className="flex flex-col justify-center items-center gap-5 p-5 pt-10 hover:shadow-lg hover:scale-105 transition-all hover:border-purple-600">
          <div className="p-3 text-5xl rounded-full bg-purple-900 text-white">
            <BiErrorAlt />
          </div>
          <h1 className="font-bold text-xl">Step 2: Start Reporting</h1>
          <p className="px-10">
            "Lost or found something? Post here to claim or return items to
            their rightful owners. Let’s reunite lost items with their owners!"
          </p>
        </Card>
      </div>
      <h1 className="font-bold text-3xl text-center mb-10">
        Frequently Asked Questions (FAQs)
      </h1>
      <div className="mx-12 sm:mx-24 lg:mx-96 mb-20">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">
              How do I search for a lost item?
            </AccordionTrigger>
            <AccordionContent>
              Use the search bar or browse categories on the "Lost Items" page
              to look for your item. You can filter by date, category, and
              location to narrow down results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">How do I report a lost item?</AccordionTrigger>
            <AccordionContent>
              Go to the "Report Lost Item" page, fill out the required details
              (e.g., item description, location, date), and submit the report.
              This will be publicly listed to help finders identify the item.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">
              How do I report an item I found?
            </AccordionTrigger>
            <AccordionContent>
              Go to the "Report Found Item" page and fill out details like item
              description, where and when you found it, and any contact
              information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">
              Is my personal information safe?
            </AccordionTrigger>
            <AccordionContent>
              We only share necessary contact information, and you have control
              over what’s visible on your listing. Please review our Privacy
              Policy for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">
              What happens if I list something incorrectly?
            </AccordionTrigger>
            <AccordionContent>
              You can update or delete your listing at any time by going to your
              account dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="mb-3 pb-3 ">
            <AccordionTrigger className="hover:text-purple-600">How long do listings stay up?</AccordionTrigger>
            <AccordionContent>
              Listings are visible for [specific time, e.g., 30 days], after
              which they can be renewed if the item is still lost or unclaimed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Landing;
