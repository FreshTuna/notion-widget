import { css } from "@emotion/react";

const popupAnimation = (visible: boolean) => css`
  ${visible
    ? `transform: translateY(0px) scale(1);
      transition: 0.7s linear ease-in-out`
    : `transform: translateY(400px) scale(0.75);
      transition: 0.7s linear ease-in-out;
    `};
`;

export {
  popupAnimation
};
