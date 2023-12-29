"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

interface AccordionProps extends React.PropsWithChildren {
  multiple?: boolean;
  // Root
  rootBase?: string;
  rootPadding?: string;
  rootSpacingY?: string;
  rootRounded?: string;
  rootWidth?: string;
  rootRest?: string;
}

interface AccordionItemProps extends React.PropsWithChildren {
  id: string;
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

interface AccordionContextState {
  childId: string;
  setChildId: Dispatch<SetStateAction<string>>;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  allowMultiple: boolean;
  setAllowMultiple: Dispatch<SetStateAction<boolean>>;
}

// Context
export const AccordionContext = createContext<AccordionContextState>({
  childId: "",
  setChildId: () => {},
  selected: [],
  setSelected: () => {},
  allowMultiple: false,
  setAllowMultiple: () => {},
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
  // Children
  children,
}): React.ReactElement => {
  // Create States
  const [childId, setChildId] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [allowMultiple, setAllowMultiple] = useState<boolean>(false);

  return (
    <div
      className={`${rootBase} ${rootPadding} ${rootSpacingY} ${rootRounded} ${rootWidth} ${rootRest}`}
      data-testid="accordion"
    >
      <AccordionContext.Provider
        value={{
          childId,
          setChildId,
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
export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
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

  useEffect(() => {
    ctx.setChildId(id);
    if (open) setOpen();
    console.log("AccordionItem-ctx", id, ctx);
  }, []);

  const onclick = (event: unknown) => {
    ctx.selected.includes(id) ? setClosed() : setOpen();
    console.log("onclick", ctx.selected);
  };

  const setOpen = () => {
    if (!ctx.allowMultiple) ctx.setSelected([]);
    ctx.setSelected([id]);
    console.log("setOpen() triggered", ctx.selected);
  };

  const setClosed = () => {
    ctx.setSelected(ctx.selected.filter((itemId) => itemId !== id));
    console.log("setClosed() triggered", ctx.selected);
  };

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
  // console.log("AccordionPanel-ctx", ctx);
  return (
    <>
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
