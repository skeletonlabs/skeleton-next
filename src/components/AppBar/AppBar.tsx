"use client"
import { useEffect, useState } from "react";

interface AppBarProps extends React.PropsWithChildren {
  /* Styles */
  rootBackground?: string;
  rootBorder?: string;
  rootPadding?: string;
  rootShadow?: string;
  rootSpacing?: string;
  rootGridColumns?: string;
  rootGap?: string;

  /* Rest */
  className?: string;
}

interface AppBarRegionRowMainProps extends React.PropsWithChildren {
  regionRowMainGridColumns?: string;
  regionRowMainGap?: string;
  className?: string;
}

interface AppBarRegionRowHeadlineProps extends React.PropsWithChildren {
  className?: string;
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

const joined = (...items: string[]) => items.join(" ");

export const AppBar: React.FC<AppBarProps> = ({
  rootBackground = "bg-surface-100-800-token",
  rootBorder = '',
  rootPadding = 'p-4',
  rootShadow = '',
  rootSpacing = "space-y-4",
  className = '',
  children 
}) => {

  const cBase = "flex flex-col";

  const [classesBase, setClassesBase] = useState(joined(cBase, rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className))

  useEffect(() => {
    setClassesBase(joined(cBase, rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className))
  }, [rootBackground, rootBorder, rootPadding, rootShadow, rootSpacing, className]);

  return (
    <div className={`app-bar ${classesBase}`}>
        {children}
    </div>
  )
};

export const AppBarRowMain: React.FC<AppBarRegionRowMainProps> = ({
  regionRowMainGridColumns = 'grid-cols-[auto_1fr_auto]',
  regionRowMainGap = 'gap-4',
  className = '',
  children
}) => {
  const cRowMain = "grid items-center";

  const [classesRowMain, setClassesRowMain] = useState(joined(cRowMain, regionRowMainGridColumns, regionRowMainGap, className))

  useEffect(() => {
    setClassesRowMain(joined(cRowMain, regionRowMainGridColumns, regionRowMainGap, className))
  }, [regionRowMainGridColumns, regionRowMainGap, className]);

  return (
    <div className={`app-bar-row-main ${classesRowMain}`}>
        {children}
    </div>
  )
}

export const AppBarRowHeadline: React.FC<AppBarRegionRowHeadlineProps> = ({
  className = '',
  children 
}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export const AppBarLead: React.FC<AppBarLeadProps> = ({
  leadClasses = '',
  children 
}) => {
  return (
    <div className={leadClasses}>
        {children}
    </div>
  )
}

export const AppBarDefault: React.FC<AppBarDefaultProps> = ({
  defaultClasses = '',
  children 
}) => {
  return (
    <div className={defaultClasses}>
        {children}
    </div>
  )
}

export const AppBarTrail: React.FC<AppBarTrailProps> = ({
  trailClasses = '',
  children 
}) => {
  return (
    <div className={trailClasses}>
        {children}
    </div>
  )
}
