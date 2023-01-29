import {keyframes} from "@emotion/react";

const popInFromBottomSnackbar = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-50%);
  };
`;

const popOutToBottomSnackbar = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(100%);
  };
`;

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export {
    popInFromBottom,
    popOutToBottom,
    popInFromBottomSnackbar,
    popOutToBottomSnackbar,
    fadeIn,
    fadeOut
}