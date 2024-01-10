"use client";

import React from "react";

interface CardProps extends React.PropsWithChildren {
  href: string;
  // Root
  base?: string;
  bg?: string;
  spaceY?: string;
  classes?: string;
}

interface CardTitleProps extends React.PropsWithChildren {
  base?: string;
  classes?: string;
}

interface CardArticleProps extends React.PropsWithChildren {
  base?: string;
  classes?: string;
}

interface CardFooterProps extends React.PropsWithChildren {
  base?: string;
  classes?: string;
}

export const Card: React.FC<CardProps> = ({
  href,
  // Root
  base = "card",
  bg = "bg-slate-800",
  spaceY = "space-y-2",
  classes = "",
  // Children
  children,
}): React.ReactElement => {
  return (
    <a href={href} className={`${base} ${bg} ${spaceY} ${classes}`}>
      {children}
    </a>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  base = "h2",
  classes = "",
  children,
}): React.ReactElement => {
  return <h2 className={`${base} ${classes}`}>{children}</h2>;
};

export const CardArticle: React.FC<CardArticleProps> = ({
  base = "",
  classes = "",
  children,
}): React.ReactElement => {
  return <article className={`${base} ${classes}`}>{children}</article>;
};

export const CardFooter: React.FC<CardFooterProps> = ({
  base = "border-t border-white/10 pt-2",
  classes = "",
  children,
}): React.ReactElement => {
  return <footer className={`${base} ${classes}`}>{children}</footer>;
};
