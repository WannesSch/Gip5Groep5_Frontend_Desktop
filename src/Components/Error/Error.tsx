import React from "react";
import {
  StyledErrorBox,
  StyledErrorDescription,
  StyledErrorTitle,
} from "./Error.styled";

type ErrorProps = {
  title: string;
  description?: string;
};

function ErrorComponent({ title, description }: ErrorProps) {
  return (
    <StyledErrorBox>
      <StyledErrorTitle>ERROR: {title}</StyledErrorTitle>
      <StyledErrorDescription>{description}</StyledErrorDescription>
    </StyledErrorBox>
  );
}

export default ErrorComponent;
