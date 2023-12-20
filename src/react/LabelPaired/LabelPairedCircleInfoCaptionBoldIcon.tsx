import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleInfoCaptionBoldIcon = (
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
        d='M6 4.625c-.89 0-1.703.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.837 4.837 0 0 0 1.125 9.5c0 .86.219 1.672.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.674 4.674 0 0 0 6 14.376c.89 0 1.703-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.838 4.838 0 0 0 .657-2.438c0-.86-.219-1.672-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.673 4.673 0 0 0 6 4.625M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m-.937-4.125h.562v-1.5h-.562c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h1.125c.343.031.53.219.562.563v2.062h.188c.343.031.53.219.562.563-.031.343-.219.53-.562.562H5.063c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563M6 8a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54A.73.73 0 0 1 6 6.5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54A.73.73 0 0 1 6 8'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoCaptionBoldIcon);
export default ForwardRef;
