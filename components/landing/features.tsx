import React from "react";
import { Users, BookOpen, Trophy } from "lucide-react";
import CountUp from "../count-up";
import SpotlightCard from "../spotlight-card";
import GradientText from "../gradient-text";

const stats = [
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    value: 50000,
    label: "Active Students",
    title: "Real Students",
    suffix: "+",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    value: 1200,
    label: "Courses Available",
    title: "Real Courses",
    suffix: "+",
  },
  {
    icon: <Trophy className="h-8 w-8 text-green-500" />,
    value: 98,
    label: "Success Rate",
    title: "Real Results",
    suffix: "%",
  },
];

export default function Features() {
  return (
    <section className="text-white relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto relative z-10 mt-12">
        <div className="text-center mb-16">
          <GradientText
            className="text-7xl"
            colors={["#00E3FD", "#01C59E", "#01A63E"]}
            showBorder={false}
          >
            Some boring numbers
          </GradientText>
          <p className="mt-4 text-gray-400 font-medium text-xl">
            Well, not really.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {stats.map((stat, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={
                index === 0
                  ? "rgba(0, 227, 253, 0.3)"
                  : index === 1
                    ? "rgba(1, 197, 158, 0.3)"
                    : "rgba(1, 166, 62, 0.3)"
              }
              className={`relative flex flex-col items-start justify-start ${
                index === 1 ? "row-span-2 items-end" : ""
              }`}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">
                <GradientText
                  className="text-7xl"
                  colors={["#00E3FD", "#01C59E", "#01A63E"]}
                  showBorder={false}
                >
                  <CountUp
                    to={stat.value}
                    duration={2.5}
                    className="inline-block"
                    separator=","
                  />
                  {stat.suffix}
                </GradientText>
              </div>
              <h1 className="text-white text-2xl font-bold">{stat.title}</h1>
              <p className="text-gray-400 font-medium">{stat.label}</p>

              <div className="absolute bottom-4 right-4">{stat.icon}</div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
