"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useRef,
} from "react";

interface AccordionProps extends React.PropsWithChildren {
  multiple?: boolean;
  // ---
  base?: string;
  padding?: string;
  spaceY?: string;
  rounded?: string;
  width?: string;
  classes?: string;
}

interface AccordionItemProps extends React.PropsWithChildren {
  base?: string;
  spaceY?: string;
  classes?: string;
}

interface AccordionControlProps extends React.PropsWithChildren {
  controls: string;
  open?: boolean;
  disabled?: boolean;
  // Root
  base?: string;
  hover?: string;
  padding?: string;
  rounded?: string;
  classes?: string;
  // Slots
  lead?: ReactNode;
}

interface AccordionPanelProps extends React.PropsWithChildren {
  id: string;
  base?: string;
  padding?: string;
  rounded?: string;
  classes?: string;
}

// Context ---

interface AccordionContextState {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  allowMultiple: boolean;
  setAllowMultiple: Dispatch<SetStateAction<boolean>>;
}

export const AccordionContext = createContext<AccordionContextState>({
  selected: [],
  setSelected: () => {},
  allowMultiple: false,
  setAllowMultiple: () => {},
});

/** Component: An Accordion child element. */
export const Accordion: React.FC<AccordionProps> = ({
  multiple = false,
  // Root
  base = "",
  padding = "",
  spaceY = "space-y-1",
  rounded = "rounded",
  width = "w-full",
  classes = "",
  // Children
  children,
}): React.ReactElement => {
  const [selected, setSelected] = useState<string[]>([]);
  const [allowMultiple, setAllowMultiple] = useState<boolean>(multiple);

  return (
    <div
      className={`${base} ${padding} ${spaceY} ${rounded} ${width} ${classes}`}
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
export const AccordionItem: React.FC<AccordionItemProps> = ({
  base = "",
  spaceY = "",
  classes = "",
  // Children
  children,
}): React.ReactElement => {
  return (
    <div
      className={`${base} ${spaceY} ${classes}`}
      data-testid="accordion-item"
    >
      {children}
    </div>
  );
};

export const AccordionControl: React.FC<AccordionControlProps> = ({
  controls,
  open = false,
  disabled = false,
  // Control
  base = "flex text-start items-center space-x-4 w-full",
  hover = "hover:bg-white/5",
  padding = "py-2 px-4",
  rounded = "rounded",
  classes = "",
  // Children
  lead,
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
      className={`${base} ${hover} ${padding} ${rounded} ${classes}`}
      aria-expanded={ctx.selected.includes(controls)}
      aria-controls={`accordion-panel-${controls}`}
      onClick={onclick}
      disabled={disabled}
    >
      {/* Lead */}
      {lead && <div>{lead}</div>}
      {/* Content */}
      <div className="flex-1">{children}</div>
      {/* State Indicator */}
      <div>{ctx.selected.includes(controls) ? "-" : "+"}</div>
    </button>
  );
};

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  id,
  // Panel
  base = "",
  padding = "py-2 px-4",
  rounded = "",
  classes = "",
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
      {/* {ctx.selected.includes(id) && (
        <div className={`${base} ${padding} ${rounded} ${classes}`}>
          {children}
        </div>
      )} */}
      <AnimationWrapper show={ctx.selected.includes(id)}>
        <div className={`${base} ${padding} ${rounded} ${classes}`}>
          {children}
        </div>
      </AnimationWrapper>
    </div>
  );
};

// Animation ---
// NOTE: this is a test of the Web Animations API

interface ActionWrapperProps extends React.PropsWithChildren {
  show: boolean;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  unMountAnimation?: any;
  options?: Record<string, unknown>;
}

export const AnimationWrapper: React.FC<ActionWrapperProps> = ({
  show,
  children,
  from = { maxHeight: 0 },
  to = { maxHeight: "300px" },
  unMountAnimation,
  options = { duration: 200, fill: "forwards" },
}) => {
  const elementRef = useRef<any>(null);
  const [removeState, setRemove] = useState(!show);

  useEffect(() => {
    const childElement = elementRef.current;
    if (show) {
      setRemove(false);
      if (!childElement) return;
      childElement.animate([from, to], options);
    } else {
      if (!childElement) return;
      const animation = childElement.animate(
        unMountAnimation || [to, from],
        options
      );
      animation.onfinish = () => {
        setRemove(true);
      };
    }
  }, [show, removeState]);

  return (
    !removeState && (
      <div ref={elementRef} className="">
        {children}
      </div>
    )
  );
};
