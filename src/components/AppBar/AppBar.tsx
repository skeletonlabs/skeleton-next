"use client"
import { useEffect, useState } from "react";
import { composeComponents } from "src/lib/react/compose";

interface AppBarRootProps extends React.PropsWithChildren {
  /* Styles */
  rootBackground?: string;
  rootBorder?: string;
  rootPadding?: string;
  rootShadow?: string;
  rootSpacing?: string;
  rootGridColumns?: string;
  rootGap?: string;
  rootRegionRowMain?: string;

  /* A11y */
  label?: string;
  labelledby?: string;

  /* Rest */
  class?: string;
}

interface AppBarRegionRowHeadlineProps extends React.PropsWithChildren {
  regionRowHeadLineClasses?: string;
}

interface AppBarLeadProps extends React.PropsWithChildren {
  leadClasses?: string;
}

interface AppBarDefaultProps extends React.PropsWithChildren {
  defaultClasses?: string;
}

interface AppBarTrailProps extends React.PropsWithChildren {
  trailClasses?: string;
}

const AppBarRoot: React.FC<AppBarRootProps> = ({
  rootBackground = "bg-surface-100-800-token",
  rootBorder = '',
  rootPadding = 'p-4',
  rootShadow = '',
  rootSpacing = "space-y-4",
  rootGridColumns = "grid-cols-[auto_1fr_auto]",
  rootRegionRowMain = '',
  rootGap = "gap-4",
  label, 
  labelledby, 
  class: className = '',
  children 
}) => {

  

  const joined = (...items: string[]) => items.join(" ");
  const cBase = "flex flex-col";
  const cRowMain = "grid items-center";

  const [classesBase, setClassesBase] = useState(joined(cBase, rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className))
  const [classesRowMain, setClassesRowMain] = useState(joined(cRowMain, rootGridColumns, rootGap, rootRegionRowMain))

  useEffect(() => {
    setClassesBase(joined(cBase, rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className))
  }, [rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className]);

  useEffect(() => {
    setClassesRowMain(joined(cRowMain, rootGridColumns, rootGap, rootRegionRowMain))
  }, [rootGridColumns, rootGap, rootRegionRowMain]);

  return (
    <div className={classesBase}>
        {children}
    </div>
  )
};

const AppBarRowMain: React.FC<AppBarRegionRowHeadlineProps> = ({
  regionRowHeadLineClasses = '',
  children 
}) => {
  const joined = (...items: string[]) => items.join(" ");
  const cBase = "flex flex-row";
  const [classesBase, setClassesBase] = useState(joined(cBase, regionRowHeadLineClasses))

  useEffect(() => {
    setClassesBase(joined(cBase, regionRowHeadLineClasses))
  }, [regionRowHeadLineClasses]);

  return (
    <div className={classesBase}>
        {children}
    </div>
  )
}
