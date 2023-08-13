import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { ICommonSvg } from "./Svgs.typs"

function HeartIcon(props: ICommonSvg) {
    const {width, height} = props
  return (
    <Svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.139 3.75c4.403 0 7.361 4.19 7.361 8.1 0 7.917-12.278 14.4-12.5 14.4-.222 0-12.5-6.483-12.5-14.4 0-3.91 2.958-8.1 7.361-8.1 2.528 0 4.18 1.28 5.139 2.405.958-1.125 2.611-2.405 5.139-2.405z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HeartIcon
