import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileChartColumnSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 16c.018.273.164.42.437.438h7c.273-.019.42-.165.438-.438V8.125H7.25a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V5.062H2c-.273.019-.42.165-.438.438V16ZM2 3.75h4.54c.473 0 .883.173 1.23.52l2.46 2.46c.347.347.52.766.52 1.258V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2c-.492-.018-.902-.191-1.23-.52C.44 16.902.268 16.492.25 16V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Zm4.156 7.656v3.5c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656v-3.5c.036-.4.255-.62.656-.656.401.037.62.255.656.656Zm2.407.875v2.625c-.037.401-.256.62-.657.656-.4-.036-.62-.255-.656-.656v-2.625c.036-.4.255-.62.656-.656.401.037.62.255.657.656Zm-4.813.875v1.75c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656v-1.75c.036-.4.255-.62.656-.656.4.037.62.255.656.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmBoldIcon);
export default ForwardRef;
