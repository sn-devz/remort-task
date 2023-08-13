import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { ICommonSvg } from "./Svgs.typs"

function ShareIcon(props: ICommonSvg) {
    const {width, height} = props;
  return (
    <Svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 30 30"
      style={{marginLeft:10}}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 10a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM7.5 18.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM22.5 27.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM10.738 16.887l8.537 4.975M19.262 8.137l-8.524 4.975"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShareIcon
