import React from "react";
import { Accordion } from "@components/Accordion/Accordion.tsx";

export const PreviewReact: React.FC = (): React.ReactElement => {
  const lorem =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.";
  const hover = "hover:bg-blue-500";
  // const ontoggle = (e: Event) => console.log(e);

  return (
    <Accordion padding="p-4" classes="border border-blue-500">
      <Accordion.Item>
        <Accordion.Control controls="reactItem1" hover={hover} lead="💀" open>
          <h4 className="h4">
            <span>React Control 1</span>
          </h4>
        </Accordion.Control>
        <Accordion.Panel id="reactItem1">
          <p>React Panel 1 - {lorem}</p>
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem2" hover={hover}>
          <h4 className="h4">React Control 2</h4>
        </Accordion.Control>
        <Accordion.Panel id="reactItem2">
          <p>React Panel 2 - {lorem}</p>
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem3" hover={hover} disabled>
          <h4 className="h4">React Control 3</h4>
        </Accordion.Control>
        <Accordion.Panel id="reactItem3">
          <p>React Panel 3 - {lorem}</p>
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem4" hover={hover}>
          <h4 className="h4">React Control 4</h4>
        </Accordion.Control>
        <Accordion.Panel id="reactItem4">
          <p>React Panel 4 - {lorem}</p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
