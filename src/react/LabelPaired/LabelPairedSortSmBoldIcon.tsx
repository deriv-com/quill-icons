import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortSmBoldIcon = (
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
        d='M2.066 8.563h4.868L4.5 6.129zM5.13 4.87l3.5 3.5c.255.292.319.61.191.957a.896.896 0 0 1-.82.547H1a.896.896 0 0 1-.82-.547c-.128-.346-.064-.665.191-.957l3.5-3.5a.913.913 0 0 1 .629-.246c.237 0 .447.082.629.246m-3.063 8.067L4.5 15.37l2.434-2.434zm3.063 3.69a.912.912 0 0 1-.629.247.912.912 0 0 1-.629-.246l-3.5-3.5c-.255-.292-.319-.61-.191-.957a.895.895 0 0 1 .82-.547h7c.383.018.656.2.82.547.128.346.064.665-.191.957z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortSmBoldIcon);
export default ForwardRef;
