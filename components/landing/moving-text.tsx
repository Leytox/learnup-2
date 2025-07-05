import React from "react";
import Particles from "../particles";
import MarqueeLine from "../marquee-line";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function MovingText() {
  return (
    <section
      id="moving-text"
      className="relative flex flex-col items-center justify-center py-16 gap-2 h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <Particles
        className="top-0 left-0 w-full h-full opacity-33"
        particleCount={200}
        particleSpread={5}
        speed={0.1}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-9xl text-center font-bold">
          Keep scrolling
          <br />
          <Tooltip>
            <TooltipTrigger asChild>
              <p>😌</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Seriously, why are you still here? 📸🤨</p>
            </TooltipContent>
          </Tooltip>
        </h1>
      </div>

      <div className="container mx-auto absolute z-10 opacity-33 blur-md bg-transparent pointer-events-none">
        <MarqueeLine speed={100} direction="left">
          <span className="text-6xl md:text-9xl font-bold text-green-600">
            LEARN
          </span>
          <span className="text-6xl md:text-9xl font-bold">
            {" "}
            EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={180} direction="right">
          <span
            className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text"
            style={{ WebkitTextStroke: "4px white" }}
          >
            LEARN EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={160} direction="left">
          <span className="text-6xl md:text-9xl font-bold">LEARN </span>
          <span className="text-6xl md:text-9xl font-bold text-[#01C59E]">
            EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={80} direction="right">
          <span
            className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text"
            style={{ WebkitTextStroke: "4px white" }}
          >
            LEARN EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={60} direction="left">
          <span className="text-6xl md:text-9xl font-bold">LEARN </span>
          <span className="text-6xl md:text-9xl font-bold text-green-600">
            EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={90} direction="right">
          <span
            className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text"
            style={{ WebkitTextStroke: "4px white" }}
          >
            LEARN EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
        <MarqueeLine speed={100} direction="left">
          <span className="text-6xl md:text-9xl font-bold text-[#00E3FD]">
            LEARN
          </span>
          <span className="text-6xl md:text-9xl font-bold">
            {" "}
            EMPOWER CONQUER&nbsp;
          </span>
        </MarqueeLine>
      </div>
    </section>
  );
}
