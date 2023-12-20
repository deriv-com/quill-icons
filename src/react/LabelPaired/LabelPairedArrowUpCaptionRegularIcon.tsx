import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpCaptionRegularIcon = (
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
        d='m4.758 4.367 4.125 4.125c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L4.875 5.539v8.836c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V5.539L.633 9.008c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l4.125-4.125c.172-.156.344-.156.516 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionRegularIcon);
export default ForwardRef;
