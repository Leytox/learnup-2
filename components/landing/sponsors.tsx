import React from "react";
import Image from "next/image";
import { sponsors } from "@/constants";

const SponsorItems = () => (
  <>
    {sponsors.map((sponsor, index) => (
      <li key={index} className="flex-shrink-0 px-8">
        <Image
          className="grayscale-100 hover:grayscale-0 transition-all duration-300"
          src={sponsor.src}
          alt={sponsor.name}
          width={150}
          height={75}
        />
      </li>
    ))}
  </>
);

export default function Sponsors() {
  return (
    <section className="bg-gray-900 text-white relative lg:py-16">
      <div className="container mx-auto overflow-hidden">
        <ul className="flex items-center w-max animate-[marquee-left_15s_linear_infinite]">
          <SponsorItems />
          <SponsorItems />
        </ul>
      </div>
    </section>
  );
}
