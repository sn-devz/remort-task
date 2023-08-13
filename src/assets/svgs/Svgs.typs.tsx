import { GestureResponderEvent } from "react-native";

export interface ICommonSvg {
  children?: Element;
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  xmlns?: string;
  xmlnsXlink?: string;
  onPress?:  (() => void) | undefined;
  color?: string
}
