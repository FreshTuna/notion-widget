import { css } from "@emotion/react";
import { devColorSet, realColorSet } from "./phaseColor";

export const blackColor = {
  colors: {
    B85: "rgba(0, 0, 0, 0.85)",
    B60: "rgba(0, 0, 0, 0.60)",
    B40: "rgba(0, 0, 0, 0.40)",
    B30: "rgba(0, 0, 0, 0.30)",
    B20: "rgba(0, 0, 0, 0.20)",
    B10: "rgba(0, 0, 0, 0.10)",
    B06: "rgba(0, 0, 0, 0.06)",
    B05: "rgba(0, 0, 0, 0.05)",
    B03: "#f7f7f7",
  },
};

export const whiteColor = {
  colors: {
    W40: "rgba(255,255,255,0.40)",
  }
}

export const brandColor = {
  W100: "#fff",
  W100_HOVER: "rgba(255,255,255,0.6)",
  BU: "#00BED6",
  LBU: "#E9F7F8",
  BU_HOVER: "#01A6C5",
  DARK_BU: "#42484C",
  DEEP_BU: "#227886",
  RED: "#FC5555",
  LRED: "rgba(255, 81, 81, 0.1)",
};

const B85 = css`
  color: ${blackColor.colors.B85};
`;

const B60 = css`
  color: ${blackColor.colors.B60};
`;

const B40 = css`
  color: ${blackColor.colors.B40};
`;

const B30 = css`
  color: ${blackColor.colors.B30};
`;

const B20 = css`
  color: ${blackColor.colors.B20};
`;

const B06 = css`
  color: ${blackColor.colors.B06};
`;

const W40 = css`
  color: ${whiteColor.colors.W40}
`;

const W100 = css`
  color: ${brandColor.W100};
`;

const primary =
  import.meta.env.VITE_PHASE != "production" ? devColorSet : realColorSet;

export { B20, B30, B40, B60, B85, primary, W100, W40 };
