import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineCaptionRegularIcon = (
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
        d='M.375 4.25h8.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.375C.141 4.984.015 4.86 0 4.625c.016-.234.14-.36.375-.375m4.383 2.367 3 3c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L4.875 7.789v6.586c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V7.79l-2.367 2.343c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l3-3c.172-.156.344-.156.516 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionRegularIcon);
export default ForwardRef;
