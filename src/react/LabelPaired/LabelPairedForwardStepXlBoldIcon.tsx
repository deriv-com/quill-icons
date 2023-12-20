import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 10.125c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v15.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-4.922l-8.297 5.813c-.25.156-.515.234-.797.234-.406 0-.734-.14-.984-.422C.89 26.328.75 26 .75 25.594V10.406c0-.406.14-.734.422-.984.25-.281.578-.422.984-.422.313 0 .578.078.797.234l8.297 5.813zm0 8.063v-.375L3 12.047V24z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlBoldIcon);
export default ForwardRef;
