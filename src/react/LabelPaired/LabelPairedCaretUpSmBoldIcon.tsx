import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCaretUpSmBoldIcon = (
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
        d='m4.5 8.754-2.434 2.434h4.868zm-.629-1.258A.913.913 0 0 1 4.5 7.25c.237 0 .447.082.629.246l3.5 3.5c.255.292.319.61.191.957A.895.895 0 0 1 8 12.5H1a.895.895 0 0 1-.82-.547c-.128-.346-.064-.665.191-.957z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmBoldIcon);
export default ForwardRef;
