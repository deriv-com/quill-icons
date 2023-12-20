import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.742 3.594c.172-.125.344-.125.516 0l6.375 5.625c.156.172.164.351.023.539-.172.156-.351.164-.539.023l-.867-.773v4.617c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-6.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335V9.008l-.867.773c-.188.14-.367.133-.54-.023-.14-.188-.132-.367.024-.54zM2.5 8.352v5.273c.016.313.125.578.328.797.219.203.485.312.797.328h6.75c.313-.016.578-.125.797-.328.203-.219.312-.485.328-.797V8.352L7 4.367z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionRegularIcon);
export default ForwardRef;
