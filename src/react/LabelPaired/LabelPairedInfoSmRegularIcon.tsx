import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.5c0-.255.082-.465.246-.629A.852.852 0 0 1 3 4.625c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629M.813 8.563c.018-.274.164-.42.437-.438H3c.273.018.42.164.438.438V16h1.75c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.813c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h1.75V9H1.25c-.273-.018-.42-.164-.437-.437'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmRegularIcon);
export default ForwardRef;
