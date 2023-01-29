import { css } from "@emotion/react";
import { B85 } from "./colorTemplate";

const fontSize = (fontSize: number) =>
  css({
    fontSize: `${fontSize}px`,
  });

const fontColor = (fontColor: string) =>
  css({
    color: fontColor,
  });

const T1_B = css`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
`;

const H5_B = css`
  font-size: 23px;
  font-weight: 700;
  line-height: 1.2;
`;

const B1_R = css`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
`;

const B2_R = css`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
`;

const B3_R = css`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
`;

const B3_B = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
`;

const B3_SB = css`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
`;

const B3_M = css`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
`;

const B4_R = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

const B4_B = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
`;

const B4_M = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const B6_R = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

const B5_B = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
`;

const B5_R = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

const B5_M = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
`;

const B8_B_TEMP = css`
  font-size: 8px;
  font-weight: 700;
  line-height: 1.4;
`;

const B6_B = css`
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
`;

const B6_SB = css`
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
`;

const B6_M = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
`;

const BTN2_M = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
`;

const BTN2_SB = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
`;

const BTN3_M = css`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
`;

const T3_B = css`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.4;
`;

const T2_SB = css`
  font-size: 19px;
  font-weight: 600;
  line-height: 1.7;
`;

const underline = css`
  text-decoration: underline;
`;

const inputLabel = css`
  ${B85}
  ${B3_R}
`;

const unselectableText = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export {
  fontSize,
  fontColor,
  T1_B,
  H5_B,
  B1_R,
  B2_R,
  B3_R,
  B4_R,
  B4_B,
  B3_B,
  B3_SB,
  B6_R,
  B6_B,
  B6_SB,
  B3_M,
  B5_B,
  B5_R,
  B5_M,
  B4_M,
  B6_M,
  BTN2_M,
  BTN2_SB,
  BTN3_M,
  B8_B_TEMP,
  T3_B,
  T2_SB,
  inputLabel,
  underline,
  unselectableText,
};
