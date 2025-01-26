import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer web development, UI/UX design, and full-stack development services. This includes custom website creation, responsive design, and web application development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
              <AccordionContent>
                Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing maintenance and support packages to ensure your website continues to perform optimally after launch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;