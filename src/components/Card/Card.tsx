import React from "react";

interface CardProps extends React.PropsWithChildren {
  href: string;
  rootBase?: string;
  rootBg?: string;
  rootSpaceY?: string;
  rootRest?: string;
}

interface CardTitleProps extends React.PropsWithChildren {
  title?: string;
  titleBase?: string;
  titleRest?: string;
}

interface CardArticleProps extends React.PropsWithChildren {
  article?: string;
  articleBase?: string;
  articleRest?: string;
}

interface CardFooterProps extends React.PropsWithChildren {
  footer?: string;
  footerBase?: string;
  footerRest?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  titleBase = "h2",
  titleRest = "",
  children = "",
}): React.ReactElement => {
  return <h2 className={`${titleBase} ${titleRest}`}>{children}</h2>;
};

export const CardArticle: React.FC<CardArticleProps> = ({
  articleBase = "",
  articleRest = "",
  children,
}): React.ReactElement => {
  return (
    <article className={`${articleBase} ${articleRest}`}>{children}</article>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  footerBase = "border-t border-white/10 pt-2",
  footerRest = "",
  children,
}): React.ReactElement => {
  return <footer className={`${footerBase} ${footerRest}`}>{children}</footer>;
};

export const Card: React.FC<CardProps> = ({
  href,
  rootBase = "card",
  rootBg = "bg-slate-800",
  rootSpaceY = "space-y-2",
  rootRest = "",
  children = "",
}): React.ReactElement => {
  return (
    <a
      href={href}
      className={`${rootBase} ${rootBg} ${rootSpaceY} ${rootRest}`}
    >
      {children}
    </a>
  );
};
