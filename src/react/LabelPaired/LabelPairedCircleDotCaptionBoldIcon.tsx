import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleDotCaptionBoldIcon = (
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
        d='M10.875 9.5c0-.89-.219-1.703-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.837 4.837 0 0 0 6 4.625c-.86 0-1.672.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.673 4.673 0 0 0 1.125 9.5c0 .89.219 1.703.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.838 4.838 0 0 0 6 14.376c.86 0 1.672-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.674 4.674 0 0 0 .657-2.438M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m6-2.25c.406 0 .781.102 1.125.305s.617.476.82.82c.203.36.305.734.305 1.125a2.255 2.255 0 0 1-1.125 1.945A2.172 2.172 0 0 1 6 11.75c-.406 0-.781-.102-1.125-.305A2.255 2.255 0 0 1 3.75 9.5a2.255 2.255 0 0 1 1.125-1.945A2.172 2.172 0 0 1 6 7.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotCaptionBoldIcon);
export default ForwardRef;
