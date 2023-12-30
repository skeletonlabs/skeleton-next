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
    <Accordion rootPadding="p-4" rootRest="bg-blue-500/5">
      <AccordionItem>
        <AccordionControl id="reactItem1" controlHover={controlHover} open>
          React Control 1
        </AccordionControl>
        <AccordionPanel id="reactItem1">React Panel 1 - {lorem}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl id="reactItem2" controlHover={controlHover}>
          React Control 2
        </AccordionControl>
        <AccordionPanel id="reactItem2">React Panel 2 - {lorem}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionControl id="reactItem3" controlHover={controlHover}>
          React Control 3
        </AccordionControl>
        <AccordionPanel id="reactItem3">React Panel 3 - {lorem}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
