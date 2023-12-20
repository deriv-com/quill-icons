import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromBracketCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.758 3.617 3 3c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L5.875 4.789v6.586c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V4.789L2.758 7.133c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l3-3c.172-.156.344-.156.516 0M1 11.375v2.25c.016.313.125.578.328.797.219.203.484.312.797.328h6.75c.313-.016.578-.125.797-.328.203-.219.312-.485.328-.797v-2.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375v2.25c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-6.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-2.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketCaptionRegularIcon);
export default ForwardRef;
