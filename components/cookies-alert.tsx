"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function CookiesAlert() {
  const [cookies, setCookies] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookies")) setCookies(true);
  }, []);

  function setCookiePolicy() {
    localStorage.setItem("cookies", "true");
    setCookies(true);
  }

  if (cookies) return null;

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
          onClick={setCookiePolicy}
          className={"bg-white text-black px-4 py-2 rounded-md"}
        >
          Got it!
        </Button>
      </div>
    </div>
  );
}
