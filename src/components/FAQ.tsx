
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                We offer web development, UI/UX design, and full-stack development services. This includes custom website creation, responsive design, and web application development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                Do you provide ongoing support?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
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
