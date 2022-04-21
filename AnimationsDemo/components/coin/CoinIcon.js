import React from 'react';

import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient
} from "react-native-svg"

export class CoinIcon extends React.Component {
  render() {
    return (
  <Svg
  width={306}
  height={120}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M302.737 43.105L301.48 88.77c-70.693 36.591-208.936 39.518-297.538-2.05L3 41.348"
    fill="url(#g14451__a)"
  />
  <Path
    d="M302.737 43.105L301.48 88.77c-70.693 36.591-208.936 39.518-297.538-2.05L3 41.348"
    stroke="#000"
    strokeWidth={5.545}
  />
  <Path
    d="M3 42.518c0 5.19 3.877 10.33 11.408 15.124 7.532 4.795 18.57 9.15 32.487 12.82 13.917 3.67 30.438 6.581 48.62 8.567 18.183 1.986 37.672 3.009 57.353 3.009 19.681 0 39.17-1.023 57.352-3.009 18.183-1.986 34.704-4.897 48.621-8.567 13.916-3.67 24.956-8.025 32.488-12.82 7.531-4.794 11.408-9.934 11.408-15.124 0-5.19-3.877-10.328-11.408-15.123-7.532-4.794-18.572-9.151-32.488-12.82-13.917-3.67-30.438-6.58-48.621-8.566C192.038 4.023 172.549 3 152.868 3c-19.681 0-39.17 1.023-57.352 3.009-18.183 1.986-34.704 4.896-48.62 8.565-13.917 3.67-24.956 8.027-32.488 12.821C6.877 32.19 3 37.328 3 42.518z"
    fill="url(#g14451__b)"
    stroke="#000"
    strokeWidth={5.823}
    strokeLinejoin="round"
  />
  <Defs>
    <RadialGradient
      id="g14451__b"
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-153.948 0 0 -43.3499 153.063 43.062)"
    >
      <Stop stopColor="#E0B524" />
      <Stop offset={1} stopColor="#F3D727" />
    </RadialGradient>
    <LinearGradient
      id="g14451__a"
      x1={307.758}
      y1={64.849}
      x2={140.855}
      y2={64.849}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#F3D727" />
      <Stop offset={1} stopColor="#E0B524" />
    </LinearGradient>
  </Defs>
</Svg>
    )
}
}