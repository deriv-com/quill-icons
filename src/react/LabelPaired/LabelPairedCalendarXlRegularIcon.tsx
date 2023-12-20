import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.25 6c.469.031.719.281.75.75V9h9V6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75V9H18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h1.5V6.75c.031-.469.281-.719.75-.75m14.25 9h-18v12c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h15c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078zM18 10.5H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v1.5h18V12c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarXlRegularIcon);
export default ForwardRef;
