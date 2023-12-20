import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseSmRegularIcon = (
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
        d='M1.438 6.375c-.274.018-.42.164-.438.438v7.875c.018.273.164.419.438.437H2.75c.273-.018.42-.164.438-.437V6.812c-.019-.273-.165-.419-.438-.437zm-1.313.438c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383H2.75c.365.018.674.146.93.383.237.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.382.93 1.427 1.427 0 0 1-.93.382H1.438a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93zm6.125-.438c-.273.018-.42.164-.437.438v7.875c.018.273.164.419.437.437h1.313c.273-.018.419-.164.437-.437V6.812c-.018-.273-.164-.419-.437-.437zm-1.312.438c.018-.365.145-.675.382-.93.256-.237.565-.365.93-.383h1.313c.364.018.674.146.93.383.236.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382H6.25a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmRegularIcon);
export default ForwardRef;
