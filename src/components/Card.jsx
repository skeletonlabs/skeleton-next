// import React, { useState } from 'react';

export default function Card({
  // Props (settings)
  href,
  title,
  body,
  // Props (styles)
  elemBase = "card",
  elemHeading = "h2",
  regionBase = "",
  regionHeading = "",
  background = "bg-slate-800",
}) {
  return (
      <>
        <a href={href} className={[`${elemBase} ${background} ${regionBase}`]}>
          <h2 className={[`${elemHeading} ${regionHeading}`]}>{title}</h2>
          <p>{body}</p>
        </a>
      </>
  )
};