import { css } from "@emotion/react";

const alignCenterJustifyCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const alignCenterJustifyFlexEnd = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const alignStretch = css`
  display: flex;
  align-items: stretch;
`;

const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

const justifySpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

const justifyFlexEnd = css`
  display: flex;
  justify-content: flex-end;
`;

const alignCenterCenterColumn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const alignCenterCenterRow = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const alignCenterSpaceBetweenRow = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const alignCenterSpaceBetweenColumn = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const alignCenterCenterInline = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const flexDirectionColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexDirectionColumnAlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const flexDirectionRow = css`
  display: flex;
  flex-direction: row;
`;

const flexDirectionRowAlignItems = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const flexDirectionRowAlignItemsBaseline = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const flexAlignRight = css`
  margin-left: auto;
`;

const flexAlignLeft = css`
  margin-right: auto;
`;

const flexAlignBottom = css`
  margin-top: auto;
`;

const flexGap = (gap: number) => css`
  gap: ${gap}px;
`;

const flexGrow = css`
  flex-grow: 1;
`;

export {
  alignCenter,
  alignStretch,
  justifyCenter,
  justifySpaceBetween,
  justifyFlexEnd,
  alignCenterCenterInline,
  alignCenterJustifyCenter,
  alignCenterCenterColumn,
  alignCenterCenterRow,
  alignCenterSpaceBetweenRow,
  alignCenterSpaceBetweenColumn,
  flexDirectionColumnAlignCenter,
  alignCenterJustifyFlexEnd,
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowAlignItems,
  flexAlignRight,
  flexAlignLeft,
  flexAlignBottom,
  flexGap,
  flexGrow,
  flexDirectionRowAlignItemsBaseline,
};
