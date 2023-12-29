import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from "@components/Accordion/Accordion.tsx";

export const PreviewReact: React.FC = (): React.ReactElement => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionControl>Control-1</AccordionControl>
        <AccordionPanel>Panel-1</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl>Control-2</AccordionControl>
        <AccordionPanel>Panel-2</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl>Control-3</AccordionControl>
        <AccordionPanel>Panel-3</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
