import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.035 16.684.441 11.87c-.255-.328-.246-.638.028-.93.31-.255.61-.255.902 0l3.473 3.637V5.281c.036-.4.255-.62.656-.656.401.036.62.255.656.656v9.297l3.473-3.61c.292-.273.601-.282.93-.027.255.292.255.602 0 .93l-4.594 4.813a.633.633 0 0 1-.465.191.633.633 0 0 1-.465-.191'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmBoldIcon);
export default ForwardRef;
