"use client";

import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import { composeComponents } from "src/lib/react/compose";

interface AccordionProps extends React.PropsWithChildren {
  multiple?: boolean;
  // ---
  rootBase?: string;
  rootPadding?: string;
  rootSpacingY?: string;
  rootRounded?: string;
  rootWidth?: string;
  rootRest?: string;
}

interface AccordionItemProps extends React.PropsWithChildren {
  rootBase?: string;
  rootSpacingY?: string;
  rootRest?: string;
}

interface AccordionControlProps extends React.PropsWithChildren {
  controls: string;
  open?: boolean;
  disabled?: boolean;
  // ---
  controlBase?: string;
  controlHover?: string;
  controlPadding?: string;
  controlRounded?: string;
  controlRest?: string;
}

interface AccordionPanelProps extends React.PropsWithChildren {
  id: string;
  panelBase?: string;
  panelPadding?: string;
  panelRounded?: string;
  panelRest?: string;
  // panelAnimDuration?: number;
}

// Context ---

interface AccordionContextState {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  allowMultiple: boolean;
  setAllowMultiple: Dispatch<SetStateAction<boolean>>;
}

// Context
const AccordionContext = createContext<AccordionContextState>({
  selected: [],
  setSelected: () => {},
  allowMultiple: false,
  setAllowMultiple: () => {},
});

/** Component: An Accordion child element. */
const AccordionRoot: React.FC<AccordionProps> = ({
  multiple = false,
  // Root
  rootBase = "",
  rootPadding = "",
  rootSpacingY = "space-y-1",
  rootRounded = "rounded",
  rootWidth = "w-full",
  rootRest = "",
  // Children
  children,
}): React.ReactElement => {
  const [selected, setSelected] = useState<string[]>([]);
  const [allowMultiple, setAllowMultiple] = useState<boolean>(multiple);

  return (
    <div
      className={`${rootBase} ${rootPadding} ${rootSpacingY} ${rootRounded} ${rootWidth} ${rootRest}`}
      data-testid="accordion"
    >
      <AccordionContext.Provider
        value={{
          selected,
          setSelected,
          allowMultiple,
          setAllowMultiple,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

/** Component: An Accordion child element. */
const AccordionItem: React.FC<AccordionItemProps> = ({
  rootBase = "",
  rootSpacingY = "",
  rootRest = "",
  // Children
  children,
}): React.ReactElement => {
  return (
    <div
      className={`${rootBase} ${rootSpacingY} ${rootRest}`}
      data-testid="accordion-item"
    >
      {children}
    </div>
  );
};

const AccordionControl: React.FC<AccordionControlProps> = ({
  id,
  open = false,
  disabled = false,
  // Control
  controlBase = "flex text-start items-center space-x-4 w-full",
  controlHover = "hover:bg-white/5",
  controlPadding = "py-2 px-4",
  controlRounded = "rounded",
  controlRest = "",
  // Children
  children,
}): React.ReactElement => {
  let ctx = useContext<AccordionContextState>(AccordionContext);

  useEffect(() => {
    if (open) setOpen();
  }, [open]);

  const onclick = () => {
    ctx.selected.includes(controls) ? setClosed() : setOpen();
  };

  const setOpen = () => {
    if (ctx.allowMultiple === false) ctx.setSelected([]);
    ctx.setSelected((currentValue) => [...currentValue, controls]);
  };

  const setClosed = () => {
    ctx.setSelected(ctx.selected.filter((itemId) => itemId !== controls));
  };

  return (
    <button
      type="button"
      className={`${controlBase} ${controlHover} ${controlPadding} ${controlRounded} ${controlRest}`}
      aria-expanded={ctx.selected.includes(controls)}
      aria-controls={`accordion-panel-${controls}`}
      onClick={onclick}
      disabled={disabled}
    >
      {/* Content */}
      <div className="flex-1">{children}</div>
      {/* State Indicator */}
      <div>{ctx.selected.includes(controls) ? "-" : "+"}</div>
    </button>
  );
};

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  id,
  // Panel
  panelBase = "",
  panelPadding = "py-2 px-4",
  panelRounded = "",
  panelRest = "",
  // panelAnimDuration = 200,
  // Children
  children,
}): React.ReactElement => {
  let ctx = useContext<AccordionContextState>(AccordionContext);

  return (
    <div
      role="region"
      aria-hidden={ctx.selected.includes(id)}
      aria-labelledby={id}
    >
      {ctx.selected.includes(id) && (
        <div
          className={`${panelBase} ${panelPadding} ${panelRounded} ${panelRest}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion = composeComponents(AccordionRoot, {
  Item: AccordionItem,
  Control: AccordionControl,
  Panel: AccordionPanel,
});
