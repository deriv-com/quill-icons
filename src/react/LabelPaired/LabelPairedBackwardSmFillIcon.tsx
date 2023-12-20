import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardSmFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.578 15.809-4.703-3.91V9.601l4.703-3.91c.274-.22.584-.256.93-.11.31.164.474.428.492.793v8.75c-.018.365-.182.629-.492.793-.346.146-.656.11-.93-.11M7 13.375v1.75c-.018.365-.182.629-.492.793-.347.146-.656.11-.93-.11l-5.25-4.374A.854.854 0 0 1 0 10.75c0-.273.11-.501.328-.684l5.25-4.375c.274-.218.583-.255.93-.109.31.164.474.428.492.793v4.375z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmFillIcon);
export default ForwardRef;
