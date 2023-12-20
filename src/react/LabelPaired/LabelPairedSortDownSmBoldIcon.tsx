import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownSmBoldIcon = (
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
        d='m4.5 15.371 2.434-2.434H2.066zm-.629 1.258-3.5-3.5c-.255-.292-.319-.61-.191-.957a.895.895 0 0 1 .82-.547h7c.383.018.656.2.82.547.128.346.064.665-.191.957l-3.5 3.5a.912.912 0 0 1-.629.246.912.912 0 0 1-.629-.246'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmBoldIcon);
export default ForwardRef;
