import React from "react";

export default function Logo() {
  return (
    <h1
      className={
        "bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent text-3xl tracking-normal font-semibold pointer-events-none"
      }
    >
      Learn
      <span
        className={
          "bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent"
        }
      >
        Up
      </span>
    </h1>
  );
}
