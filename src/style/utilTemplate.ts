import { css } from "@emotion/react";

const cursorPointer = css`
  cursor: pointer;
`;

const cursorGrab = css`
    cursor: grab;
`;

const cursorNotAllowed = css`
    cursor: not-allowed;
`;

const cursorCopy = css`
    cursor: copy;
`;

const widthPercent = (widthPercent: number) => css`
  width: ${widthPercent}%;
`;

const heightPercent = (heightPercent: number) => css`
  height: ${heightPercent}%;
`;

export { cursorPointer, cursorGrab, cursorNotAllowed, cursorCopy, widthPercent, heightPercent };
