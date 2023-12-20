import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPersonChalkboardRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.25 5.75c.042.458.292.708.75.75.458-.042.708-.292.75-.75-.042-.458-.292-.708-.75-.75-.458.042-.708.292-.75.75m2.5 0c-.02.667-.312 1.167-.875 1.5-.583.333-1.167.333-1.75 0-.562-.333-.854-.833-.875-1.5.02-.667.313-1.167.875-1.5.583-.333 1.167-.333 1.75 0 .563.333.854.833.875 1.5M5.594 9c-.209 0-.407.042-.594.125V14h2V9zM5 19.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-9.187L2.438 13.25c-.167.25-.386.313-.657.188-.27-.167-.343-.386-.218-.657l1.843-3.469C3.886 8.48 4.615 8.043 5.594 8H10V5.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 11.5 4h7c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v7a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 10 12.5V10h1v2.5c.02.313.188.48.5.5h7c.313-.02.48-.187.5-.5v-7c-.02-.312-.187-.48-.5-.5h-7c-.312.02-.48.188-.5.5V8h1.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H8v10.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V15H5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardRegularIcon);
export default ForwardRef;
