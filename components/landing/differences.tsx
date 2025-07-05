import { Brain, Rocket, Zap } from "lucide-react";
import GradientText from "../gradient-text";
import SpotlightCard from "../spotlight-card";

const features = [
  {
    icon: <Zap className="h-12 w-12 text-green-500" />,
    title: "Interactive Learning",
    description:
      "Engage with our interactive courses and get instant feedback.",
  },
  {
    icon: <Brain className="h-12 w-12 text-green-500" />,
    title: "AI-Powered Tutors",
    description: "Our AI tutors are available 24/7 to help you with any topic.",
  },
  {
    icon: <Rocket className="h-12 w-12 text-green-500" />,
    title: "Gamified Experience",
    description:
      "Level up your skills and earn badges as you progress through our courses.",
  },
];

export default function Differences() {
  return (
    <section className="text-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <GradientText
            className="text-7xl"
            colors={["#01A63E", "#01C59E", "#00E3FD"]}
            showBorder={false}
          >
            Why LearnUp is Different
          </GradientText>
          <p className="mt-4 text-gray-400 font-medium text-xl">
            This is for real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              spotlightColor={
                index === 0
                  ? "rgba(1, 166, 62, 0.3)"
                  : index === 1
                  ? "rgba(1, 197, 158, 0.3)"
                  : "rgba(0, 227, 253, 0.3)"
              }
            >
              {feature.icon}
              <h4 className="text-2xl font-bold mt-2 mb-4 group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
