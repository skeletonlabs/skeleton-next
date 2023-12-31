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
    <Accordion rootPadding="p-4" rootRest="border border-blue-500">
      <AccordionItem>
        <AccordionControl
          controls="reactItem1"
          controlHover={controlHover}
          open
        >
          <h4 className="h4">
            <span className="mr-4">💀</span>
            <span>React Control 1</span>
          </h4>
        </AccordionControl>
        <AccordionPanel id="reactItem1">
          <p>React Panel 1 - {lorem}</p>
        </AccordionPanel>
      </AccordionItem>
      <hr className="hr" />
      <AccordionItem>
        <AccordionControl controls="reactItem2" controlHover={controlHover}>
          <h4 className="h4">React Control 2</h4>
        </AccordionControl>
        <AccordionPanel id="reactItem2">
          <p>React Panel 2 - {lorem}</p>
        </AccordionPanel>
      </AccordionItem>
      <hr className="hr" />
      <AccordionItem>
        <AccordionControl
          controls="reactItem3"
          controlHover={controlHover}
          disabled
        >
          <h4 className="h4">React Control 3</h4>
        </AccordionControl>
        <AccordionPanel id="reactItem3">
          <p>React Panel 3 - {lorem}</p>
        </AccordionPanel>
      </AccordionItem>
      <hr className="hr" />
      <AccordionItem>
        <AccordionControl controls="reactItem4" controlHover={controlHover}>
          <h4 className="h4">React Control 4</h4>
        </AccordionControl>
        <AccordionPanel id="reactItem4">
          <p>React Panel 4 - {lorem}</p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
