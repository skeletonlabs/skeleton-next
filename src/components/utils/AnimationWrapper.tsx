// NOTE: this is a test of the Web Animations API
// https://javascript.plainenglish.io/animating-child-component-on-mount-and-unmount-and-removing-itself-from-dom-after-unmount-65e6bb1cabab

import { useEffect, useRef, useState } from "react";

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
