import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ICommonSvg} from './Svgs.typs';

function BackButtonSvg(props: ICommonSvg) {
  const {height, width} = props;
  return (
    <Svg
      width={width || 31}
      height={height || 30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.477 22.5l-7.5-7.5 7.5-7.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackButtonSvg;
