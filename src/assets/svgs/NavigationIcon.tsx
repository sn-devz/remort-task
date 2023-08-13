import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ICommonSvg} from './Svgs.typs';

function NavigationIcon(props: ICommonSvg) {
  const {height, width} = props;
  return (
    <Svg
      width={width || 14}
      height={height || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.521 14h-.037a.657.657 0 01-.6-.494l-1.5-5.889-5.889-1.5a.657.657 0 01-.071-1.25L13.108.042a.657.657 0 01.848.848L9.135 13.576a.656.656 0 01-.614.424zm-5.69-8.646L7.085 6.44a.657.657 0 01.474.474l1.085 4.254 3.563-9.377-9.376 3.564z"
        fill="#BC61F5"
      />
    </Svg>
  );
}

export default NavigationIcon;
