import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseSmFillIcon = (
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
        d='M1.438 5.5h.875c.364.018.674.146.93.383.236.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382h-.874a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93V6.814c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383m5.25 0h.875c.364.018.674.146.93.383.236.255.364.565.382.93v7.875a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382h-.875a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93V6.814c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmFillIcon);
export default ForwardRef;
