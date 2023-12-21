import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleEightCaptionBoldIcon = (
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
        d='M10.875 9.5c0-.89-.219-1.703-.656-2.437A4.869 4.869 0 0 0 8.438 5.28 4.837 4.837 0 0 0 6 4.625c-.86 0-1.672.219-2.437.656A4.868 4.868 0 0 0 1.78 7.063 4.673 4.673 0 0 0 1.125 9.5c0 .89.219 1.703.656 2.438a4.869 4.869 0 0 0 1.782 1.78A4.838 4.838 0 0 0 6 14.376c.86 0 1.672-.219 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.674 4.674 0 0 0 .657-2.438M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m6.188-3c.484.016.882.18 1.195.492.312.313.476.711.492 1.196 0 .374-.102.703-.305.984.438.36.664.844.68 1.453-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335.016-.61.25-1.094.703-1.453a1.557 1.557 0 0 1-.328-.985c.016-.484.18-.882.492-1.195.313-.312.711-.476 1.196-.492zm-.375 2.25h.375c.343-.031.53-.219.562-.562-.031-.344-.219-.532-.562-.563h-.375c-.344.031-.532.219-.563.563.031.343.219.53.563.562m.375 1.125h-.563a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54c0 .219.07.398.21.54.142.14.321.21.54.21h.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionBoldIcon);
export default ForwardRef;