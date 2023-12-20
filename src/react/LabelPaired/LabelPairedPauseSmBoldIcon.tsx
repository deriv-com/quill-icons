import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.438 6.813v7.875H2.75V6.812zm-1.313 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383H2.75c.365.018.674.146.93.383.237.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.382.93 1.427 1.427 0 0 1-.93.382H1.438a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93zm6.125 0v7.875h1.313V6.812zm-1.312 0c.018-.365.145-.675.382-.93.256-.237.565-.365.93-.383h1.313c.364.018.674.146.93.383.236.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382H6.25a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93z'
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
