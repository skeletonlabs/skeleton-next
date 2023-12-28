import React from "react";

interface CardProps {
  href: string;
  // Root
  rootBase?: string;
  rootBg?: string;
  rootSpaceY?: string;
  rootRest?: string;
  // Title
  titleBase?: string;
  titleRest?: string;
  // Article
  articleBase?: string;
  articleRest?: string;
  // Footer
  footerBase?: string;
  footerRest?: string;
  // Slots
  // https://sandroroth.com/blog/react-slots/
  title?: string;
  article?: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({
  href,
  // Root
  rootBase = "card",
  rootBg = "bg-slate-800",
  rootSpaceY = "space-y-2",
  rootRest,
  // Title
  titleBase = "h2",
  titleRest,
  // Article
  articleBase,
  articleRest,
  // Footer
  footerBase = "border-t border-white/10 pt-2",
  footerRest,
  // Slots
  title,
  article,
  footer,
}): React.ReactElement => {
  return (
    <a
      href={href}
      className={`${rootBase} ${rootBg} ${rootSpaceY} ${rootRest}`}
    >
      {/* Title */}
      {title && <h2 className={`${titleBase} ${titleRest}`}>{title}</h2>}
      {/* Article */}
      {article && (
        <article className={`${articleBase} ${articleRest}`}>{article}</article>
      )}
      {/* Footer */}
      {footer && (
        <footer className={`${footerBase} ${footerRest}`}>{footer}</footer>
      )}
    </a>
  );
};

export default Card;
