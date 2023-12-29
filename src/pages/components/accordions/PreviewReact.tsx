import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from "@components/Accordion/Accordion.tsx";

export const PreviewReact: React.FC = (): React.ReactElement => {
  const lorem =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.";
  const controlHover = "hover:bg-blue-500";
  // const ontoggle = (e: Event) => console.log(e);

  return (
    <Accordion>
      <AccordionItem open>
        <AccordionControl controlHover={controlHover}>
          Control-1
        </AccordionControl>
        <AccordionPanel>Panel-1 - {lorem}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl controlHover={controlHover}>
          Control-2
        </AccordionControl>
        <AccordionPanel>Panel-2 - {lorem}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl controlHover={controlHover}>
          Control-3
        </AccordionControl>
        <AccordionPanel>Panel-3 - {lorem}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
