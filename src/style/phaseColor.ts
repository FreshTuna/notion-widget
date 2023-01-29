export const devColorSet = {
  colors: {
    "100": "#F0F4F7",
    "200": "#F8F0FF",
    "900": "#6C4568",
    hover: {
      "900": "#634767",
    },
    active: {
      "900": "#543257",
    },
  },
};

export const realColorSet = {
  colors: {
    "100": "#F0F4F7",
    "200": "#E6EDF3",
    "900": "#004B82",
    hover: {
      "900": "#195D8E",
    },
    active: {
      "900": "#003C68",
    },
  },
};

export const getForConfig = (phase: string) => {
  return phase !== "production" ? devColorSet : realColorSet;
};
