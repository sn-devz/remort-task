import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import {ICommonSvg} from './Svgs.typs';

function CalenderSvg(props: ICommonSvg) {
    const { height, width, onPress} = props;
  return (
    <Svg
      width={width || 54}
      height={height || 50}
      onPress={onPress}
      viewBox="0 0 54 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={53} height={49} rx={10.5} stroke="#BC61F5" />
      <Path
        d="M36 24.5v-2.7c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C33.72 17 32.88 17 31.2 17h-8.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C18 19.28 18 20.12 18 21.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C20.28 35 21.12 35 22.8 35h4.7M36 23H18m13-8v4m-8-4v4m10 15v-6m-3 3h6"
        stroke="#BC61F5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CalenderSvg
