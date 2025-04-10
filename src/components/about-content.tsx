"use client";

import { motion } from "framer-motion";
import { SmoothSection } from "./smooth-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function AboutContent() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container px-4 mx-auto max-w-3xl">
        <SmoothSection>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl sm:mb-6 md:mb-8"
          >
            Jay Park
          </motion.h1>
        </SmoothSection>

        <SmoothSection delay={0.1}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-base sm:text-lg text-muted-foreground sm:mb-10 md:mb-12"
          >
            UC Berkeley alum with a B.A. in Cognitive Science and HCI. I'm passionate about crafting seamless, joyful experiences. Currently at Ruli, reimagining legal workflow with AI.
          </motion.p>
        </SmoothSection>

        <SmoothSection delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
            <AccordionItem value="background" className="border-none">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold py-2 sm:py-3">
                Background
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                <p className="mb-4">
                  Ever since I can remember, I've always been curious and intrigued about how people see and interact with the world around them. This curiosity led me to study psychology and cognitive science, exploring the intricacies of human perception, cognition, and ultimately, human-computer interaction.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="design-philosophy" className="border-none">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold py-2 sm:py-3">
                Design Philosophy
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                <p className="mb-4">
                  My background has shaped my design philosophy to prioritize minimizing cognitive load for users. In a world where people juggle countless products daily, the last thing I want is to create yet another hurdle. Instead, I strive to craft experiences that invite users in, encouraging them to explore deeper without feeling lost at the front door.
                </p>
                <p className="mb-4">
                  One thing I really love about design is how small details can subtly shape people's experiences. It's not merely about aesthetics; it's about hitting that sweet spot where everything feels just right. This is why I find joy in crafting playful micro-animations, fine-tuning the perfect spring animation, and humanizing interactions to reflect genuine human intentions. Think about it—it's often the little things that make your day!
                </p>
                <p>
                  At the heart of my work is empathy. Keeping in mind that there's a complex, unique individual on the other side of the screen inspires me to adopt a multi-layered approach to design. My goal is to craft products that make people feel fulfilled and seamlessly weave into their daily lives.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="things-i-love" className="border-none">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold py-2 sm:py-3">
                Things I Love
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                <p>
                  I find inspiration in the world around me. I love to travel and experience different cultures, which often informs my design choices. When I'm not creating, you can find me out riding my bike, or shredding the slopes on my snowboard during the winter season. Also a big fan of Hawaiian pizza but never mind :)
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SmoothSection>
      </div>
    </section>
  );
}
