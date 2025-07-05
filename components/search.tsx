"use client";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

export default function SearchButton() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isModalOpen]);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Search />
      </Button>
      {isModalOpen && (
        <div className="h-screen w-screen fixed backdrop-blur-md bg-transparent top-0 left-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsModalOpen(false)}
            >
              <X />
            </Button>
            <Input placeholder="Search..." className="w-96" ref={inputRef} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => console.log("Search clicked")}
            >
              <Search />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
