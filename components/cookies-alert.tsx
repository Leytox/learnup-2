"use client";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "./ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useLocalStorage("isAccepted", false);

  useEffect(() => {
    if (!isAccepted) setIsVisible(true);
    else setIsVisible(false);
  }, [isAccepted, isVisible, setIsVisible]);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  if (!isVisible) return null;

  return (
    <div className={"fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4"}>
      <div
        className={
          "flex items-center justify-between max-sm:justify-center container h-full px-6 lg:px-8"
        }
      >
        <p>
          This website uses cookies to ensure you get the best experience on our
          website.
        </p>
        <Button
          onClick={handleAccept}
          className={"bg-white text-black px-4 py-2 rounded-md"}
        >
          Got it!
        </Button>
      </div>
    </div>
  );
}
