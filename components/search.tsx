"use client";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

export default function SearchButton() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
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
        <div className="h-screen w-screen fixed bg-transparent animate-blur top-0 left-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="absolute top-2 right-2"
          >
            <X />
          </Button>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <form>
              <div className="relative">
                <Search
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-96 pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  ref={inputRef}
                />
                {searchTerm.length > 0 && (
                  <Button
                    variant="link"
                    size="icon"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
                    title="Clear search"
                  >
                    <X />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
