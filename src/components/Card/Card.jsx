// import React, { useState } from 'react';

export default function Card({
  // Props (settings)
  href,
  title,
  body,
  // Props (styles)
  elemBase = "card",
  elemHeading = "h2",
  restBase = "",
  restHeading = "",
  background = "bg-slate-800",
}) {
  return (
      <>
        <a href={href} className={[`${elemBase} ${background} ${restBase}`]}>
          <h2 className={[`${elemHeading} ${restHeading}`]}>{title}</h2>
          <p>{body}</p>
        </a>
      </>
  )
};