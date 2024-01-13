import React from "react";
import {
  Card as CardReact,
  CardTitle,
  CardArticle,
  CardFooter,
} from "@components/Card/Card.tsx";

export const PreviewReact: React.FC = (): React.ReactElement => {
  return (
    <CardReact href="https://react.dev/" bg="bg-blue-500">
      <CardTitle>React Card Component</CardTitle>
      <CardArticle>The React component article.</CardArticle>
      <CardFooter>The React component footer.</CardFooter>
    </CardReact>
  );
};
