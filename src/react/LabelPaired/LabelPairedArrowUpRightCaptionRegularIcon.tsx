import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.875 5.75c.234.016.36.14.375.375v5.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V7.039l-6.117 6.094c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516L6.961 6.5H2.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionRegularIcon);
export default ForwardRef;
