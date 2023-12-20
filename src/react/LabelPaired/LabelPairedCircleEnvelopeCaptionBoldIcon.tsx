import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleEnvelopeCaptionBoldIcon = (
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
        d='M6 4.625c-.89 0-1.703.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.837 4.837 0 0 0 1.125 9.5c0 .86.219 1.672.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.674 4.674 0 0 0 6 14.376c.89 0 1.703-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.838 4.838 0 0 0 .657-2.438c0-.86-.219-1.672-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.673 4.673 0 0 0 6 4.625M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m-.164-6L3 7.93a.681.681 0 0 1 .234-.47c.141-.14.313-.21.516-.21h4.5c.203 0 .375.063.516.188A.77.77 0 0 1 9 7.93L6.164 9.5A.289.289 0 0 1 6 9.547a2.256 2.256 0 0 1-.164-.047m.703.656L9 8.796V11a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-4.5a.73.73 0 0 1-.54-.21A.73.73 0 0 1 3 11V8.797l2.46 1.36a1.287 1.287 0 0 0 1.08 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeCaptionBoldIcon);
export default ForwardRef;
