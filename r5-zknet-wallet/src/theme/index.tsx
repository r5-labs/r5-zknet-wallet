import styled from "styled-components";

export const colorBackground =
  "radial-gradient(circle, rgba(37,55,66,1) 0%, rgba(22,34,43,1) 100%);";
export const colorPrimary = "#459381";
export const colorSecondary = "#16222B";
export const colorAccent = "#0AC18E";
export const colorText = "#FFFFFF";
export const colorBorder = "#21303A";

export const colorTransparent = "transparent";
export const colorBlack = "#000000";
export const colorWhite = "#FFFFFF";
export const colorExtraLightGray = "#ECECEC";
export const colorLightGray = "#C1C1C1";
export const colorGray = "#7F7F7F";
export const colorDarkGray = "#535353";
export const colorExtraDarkGray = "#535353";

export const fontSizeH1 = "52pt";
export const fontSizeH2 = "42pt";
export const fontSizeH3 = "32pt";
export const fontSizeH4 = "24pt";
export const fontSizeH5 = "18pt";
export const fontSizeH6 = "12pt";
export const fontSize = "12pt";
export const fontWeight = "normal";

export const borderNone = "none";
export const boderDefault = `1px solid ${colorBorder}`;
export const borderRadiusDefault = "15px";
export const borderRadiusRound = "99px";
export const paddingZero = "0px";
export const paddingLow = "5px";
export const paddingDefault = "10px";
export const paddingHigh = "15px";
export const marginZero = "0px";
export const marginLow = "5px";
export const marginDefault = "10px";
export const marginHigh = "15px";
export const marginUpDownSpacing = "50px auto 50px auto";

export const buttonWidthDefault = "250px";
export const buttonWidthFull = "100%";
export const buttonPaddingDefault = "15px 20px 15px 20px";
export const buttonBorder = `1px solid ${colorTransparent}`;
export const buttonOutlinedBorder = `1px solid ${colorPrimary}`;

export const ButtonPrimary = styled.button`
  padding: ${buttonPaddingDefault};
  margin: ${marginLow};
  width: ${buttonWidthDefault};
  font-weight: ${fontWeight};
  font-size: ${fontSizeH6};
  text-align: center;
  border-radius: ${borderRadiusRound};
  border: ${buttonBorder};
  background: ${colorPrimary};
  color: ${colorText};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:hover {
    background: ${colorAccent};
  }
  &:disabled {
    cursor: pointer;
  }
  > * {
    user-select: none;
  }
`;

export const ButtonSecondary = styled.button`
  padding: ${buttonPaddingDefault};
  width: ${buttonWidthDefault};
  font-weight: ${fontWeight};
  font-size: ${fontSizeH6};
  text-align: center;
  border-radius: ${borderRadiusRound};
  border: ${buttonOutlinedBorder};
  background: ${colorTransparent};
  color: ${colorText};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:hover {
    background: ${colorAccent};
  }
  &:disabled {
    cursor: pointer;
  }
  > * {
    user-select: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colorPrimary};
  &:hover {
    text-decoration: underline;
    color: ${colorAccent};
  }
`;
