import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AI?",
    answer: "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various technologies including machine learning, natural language processing, and computer vision."
  },
  {
    question: "How can I start learning AI?",
    answer: "You can start learning AI by exploring our tutorials section, which covers topics from basic concepts to advanced techniques. We recommend beginning with our 'Introduction to AI' course and then progressing to more specific areas based on your interests."
  },
  {
    question: "Do I need programming experience to learn AI?",
    answer: "While some programming knowledge is beneficial, it's not always necessary to start learning AI concepts. However, to implement AI models and algorithms, you'll need to learn programming languages commonly used in AI, such as Python."
  },
  {
    question: "What kind of projects can I create with AI?",
    answer: "AI can be applied to a wide range of projects, including image recognition, natural language processing, predictive analytics, and autonomous systems. Our 'Create Model' section provides hands-on experience in building various AI projects."
  },
  {
    question: "How long does it take to become proficient in AI?",
    answer: "The time it takes to become proficient in AI varies depending on your background and the depth of knowledge you want to achieve. With consistent study and practice, you can gain a solid understanding of AI concepts and techniques within a few months to a year."
  }
]

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

