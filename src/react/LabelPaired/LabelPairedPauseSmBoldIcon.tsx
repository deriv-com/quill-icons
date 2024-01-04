import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.438 6.813v7.875H2.75V6.811H1.437Zm-1.313 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383H2.75c.365.018.674.146.93.383.237.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.382.93 1.427 1.427 0 0 1-.93.382H1.437a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93V6.814Zm6.125 0v7.875h1.313V6.811H6.25Zm-1.313 0c.019-.365.146-.675.383-.93.256-.237.565-.365.93-.383h1.313c.364.018.674.146.93.383.236.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382H6.25a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93V6.814Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmBoldIcon);
export default ForwardRef;
