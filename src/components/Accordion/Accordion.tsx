"use client";

import React, { createContext, useContext, useState } from "react";

interface AccordionProps extends React.PropsWithChildren {
  multiple?: boolean;
  // Root
  rootBase?: string;
  rootPadding?: string;
  rootSpacingY?: string;
  rootRounded?: string;
  rootWidth?: string;
  rootRest?: string;
  // Icons
  iconClosed?: React.FC<unknown>;
  iconOpen?: React.FC<unknown>;
}

interface AccordionItemProps extends React.PropsWithChildren {
  id?: string;
  open?: boolean;
  disabled?: boolean;
  // Root
  rootBase?: string;
  rootSpacingY?: string;
  rootRest?: string;
}

interface AccordionControlProps extends React.PropsWithChildren {
  controlBase?: string;
  controlHover?: string;
  controlPadding?: string;
  controlRounded?: string;
  controlRest?: string;
}

interface AccordionPanelProps extends React.PropsWithChildren {
  panelBase?: string;
  panelPadding?: string;
  panelRounded?: string;
  panelRest?: string;
  panelAnimDuration?: number;
}

interface AccordionContextState extends React.PropsWithChildren {
  childId: string;
  selected: string[];
  multiple: boolean;
}

// Context
export const AccordionContext = createContext<AccordionContextState>({
  childId: "",
  selected: [],
  multiple: false,
});

/** Component: An Accordion child element. */
export const Accordion: React.FC<AccordionProps> = ({
  multiple = false,
  // Root
  rootBase = "",
  rootPadding = "",
  rootSpacingY = "space-y-1",
  rootRounded = "rounded",
  rootWidth = "w-full",
  rootRest = "",
  // Icons
  iconClosed,
  iconOpen,
  // Children
  children,
}): React.ReactElement => {
  const [providerValues, setProviderValues] = useState<AccordionContextState>({
    childId: "",
    selected: [],
    multiple,
  });

  return (
    <div
      className={`${rootBase} ${rootPadding} ${rootSpacingY} ${rootRounded} ${rootWidth} ${rootRest}`}
      data-testid="accordion"
    >
      <AccordionContext.Provider value={providerValues}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

/** Component: An Accordion child element. */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  id = String(Math.random()), // <-- FIXME: for the prototype only
  open = false,
  disabled = false,
  // Root
  rootBase = "",
  rootSpacingY = "",
  rootRest = "",
  // Children
  children,
}): React.ReactElement => {
  let ctx = useContext<AccordionContextState>(AccordionContext);
  ctx.childId = id;
  //   console.log({ ctx });

  function onclick(event: unknown) {
    ctx.selected.includes(id) ? setClosed() : setOpen();
    // console.log("onclick() triggered", ctx.selected);
  }

  function setOpen() {
    if (!ctx.multiple) ctx.selected = [];
    ctx.selected.push(id);
  }

  function setClosed() {
    ctx.selected = ctx.selected.filter((itemId) => itemId !== id);
  }

  return (
    <div
      className={`${rootBase} ${rootSpacingY} ${rootRest}`}
      data-testid="accordion-item"
      onClick={onclick}
    >
      {children}
    </div>
  );
};

export const AccordionControl: React.FC<AccordionControlProps> = ({
  controlBase = "flex text-start items-center space-x-4 w-full",
  controlHover = "hover:bg-white/5",
  controlPadding = "py-2 px-4",
  controlRounded = "rounded",
  controlRest = "",
  // Children
  children,
}): React.ReactElement => {
  return (
    <button
      type="button"
      className={`${controlBase} ${controlHover} ${controlPadding} ${controlRounded} ${controlRest}`}
    >
      {children}
    </button>
  );
};

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  panelBase = "",
  panelPadding = "py-2 px-4",
  panelRounded = "",
  panelRest = "",
  panelAnimDuration = 200,
  // Children
  children,
}): React.ReactElement => {
  let ctx = useContext<AccordionContextState>(AccordionContext);
  // console.log("AccordianPanel", ctx);
  return (
    <>
      {/* FIXME: this condition is not updated reactively */}
      {ctx.selected.includes(ctx.childId) && (
        <div
          className={`${panelBase} ${panelPadding} ${panelRounded} ${panelRest}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
