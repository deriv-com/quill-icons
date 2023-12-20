import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleFourCaptionBoldIcon = (
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
        d='M10.875 9.5c0-.89-.219-1.703-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.837 4.837 0 0 0 6 4.625c-.86 0-1.672.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.673 4.673 0 0 0 1.125 9.5c0 .89.219 1.703.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.838 4.838 0 0 0 6 14.376c.86 0 1.672-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.674 4.674 0 0 0 .657-2.438M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m5.25-2.977c.313.141.43.383.352.727L4.71 9.875h1.664V8.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v1.312h.188c.343.031.53.219.562.563-.031.343-.219.53-.562.562H7.5v.938c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V11H3.938a.516.516 0 0 1-.446-.234.604.604 0 0 1-.094-.516l1.125-3.375c.141-.312.383-.43.727-.352'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourCaptionBoldIcon);
export default ForwardRef;
