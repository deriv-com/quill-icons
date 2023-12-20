import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleCalendarCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.875 9.5c0-.89-.219-1.703-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.837 4.837 0 0 0 6 4.625c-.86 0-1.672.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.673 4.673 0 0 0 1.125 9.5c0 .89.219 1.703.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.838 4.838 0 0 0 6 14.376c.86 0 1.672-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.674 4.674 0 0 0 .657-2.438M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m4.875-3.375c.234.016.36.14.375.375v.375h1.5V6.5c.016-.234.14-.36.375-.375.234.016.36.14.375.375v.375h.375c.313.016.578.125.797.328.203.219.312.484.328.797v3a1.223 1.223 0 0 1-.328.797 1.223 1.223 0 0 1-.797.328h-3.75a1.223 1.223 0 0 1-.797-.328A1.223 1.223 0 0 1 3 11V8c.016-.312.125-.578.328-.797.219-.203.485-.312.797-.328H4.5V6.5c.016-.234.14-.36.375-.375M4.125 11h3.75V8.75h-3.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarCaptionBoldIcon);
export default ForwardRef;
