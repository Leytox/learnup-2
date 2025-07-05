import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is LearnUp?",
    answer:
      "LearnUp is a comprehensive learning platform designed to help students...",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply create an account, choose your courses, and start learning...",
  },
  // Add more FAQs as needed
];

export default function FAQPage() {
  return (
    <main className=" flex justify-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
