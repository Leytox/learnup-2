import React from "react";
import GradientText from "../gradient-text";
import {
  Brain,
  ChartBar,
  Code,
  HandCoins,
  Pencil,
  Server,
  Shield,
  Briefcase,
  Megaphone,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

const learningPaths = [
  {
    icon: <Code />,
    title: "Full Stack Developer",
    description: "Build web applications from the ground up.",
  },
  {
    icon: <Pencil />,
    title: "UI/UX Designer",
    description: "Design user interfaces and user experiences.",
  },
  {
    icon: <ChartBar />,
    title: "Data Scientist",
    description: "Analyze data and make predictions.",
  },
  {
    icon: <Brain />,
    title: "AI Engineer",
    description: "Build AI models and applications.",
  },
  {
    icon: <Shield />,
    title: "Cybersecurity",
    description: "Protect systems and data from threats.",
  },
  {
    icon: <Server />,
    title: "DevOps Engineer",
    description: "Manage and deploy applications.",
  },
  {
    icon: <HandCoins />,
    title: "Sales Manager",
    description: "Close deals and manage sales.",
  },
  {
    icon: <Briefcase />,
    title: "Business Analyst",
    description: "Analyze business data and make decisions.",
  },
  {
    icon: <Briefcase />,
    title: "Product Manager",
    description: "Manage product development and roadmap.",
  },
  {
    icon: <Megaphone />,
    title: "Marketing Manager",
    description: "Manage marketing campaigns and strategies.",
  },
];

export default function LearningPaths() {
  return (
    <section className="py-12 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <GradientText
              className="text-7xl"
              colors={["#00E3FD", "#01C59E", "#01A63E"]}
              showBorder={false}
            >
              Choose YOUR path
            </GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-semibold">
            Discover structured learning paths.
          </p>
        </div>
        <div className="relative overflow-hidden w-full space-y-4">
          <div className="absolute h-full inset-0 bg-gradient-to-r from-gray-900 from-5% via-transparent via-50% to-gray-900 to-95% z-10" />
          <div className="flex container mx-auto animate-marquee-right gap-4">
            {[...learningPaths, ...learningPaths].map((path, index) => (
              <Card key={index} className="w-96 flex-shrink-0">
                <CardHeader className="flex flex-col gap-1">
                  {path.icon}
                  <h3 className="text-xl font-bold">{path.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm font-bold">
                    {path.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex container mx-auto animate-marquee-left gap-4">
            {[...learningPaths, ...learningPaths].map((path, index) => (
              <Card key={index} className="w-96 flex-shrink-0">
                <CardHeader className="flex flex-col gap-1">
                  {path.icon}
                  <h3 className="text-xl font-bold">{path.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm font-bold">
                    {path.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
