import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15.75 22.5v-9c-.031-1.5-.547-2.734-1.547-3.703-.969-1-2.203-1.516-3.703-1.547h-3c-1.5.031-2.734.547-3.703 1.547-1 .969-1.516 2.203-1.547 3.703v9c.031 1.5.547 2.734 1.547 3.703.969 1 2.203 1.516 3.703 1.547h3c1.5-.031 2.734-.547 3.703-1.547 1-.969 1.516-2.203 1.547-3.703M0 13.5c.063-2.125.797-3.89 2.203-5.297C3.61 6.797 5.375 6.063 7.5 6h3c2.125.063 3.89.797 5.297 2.203C17.203 9.61 17.937 11.375 18 13.5v9c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203h-3c-2.125-.062-3.89-.797-5.297-2.203C.797 26.39.063 24.625 0 22.5zm9-3c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v1.5c0 .438-.14.797-.422 1.078C9.797 14.86 9.438 15 9 15c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078V12c0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlBoldIcon);
export default ForwardRef;
