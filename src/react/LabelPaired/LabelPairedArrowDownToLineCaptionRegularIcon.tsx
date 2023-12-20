import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToLineCaptionRegularIcon = (
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
        d='M.375 14.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h8.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375zm4.383-2.367c-.172.156-.344.156-.516 0l-3-3c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l2.367 2.344V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v6.585l2.367-2.343c.172-.156.344-.156.516 0 .156.172.156.344 0 .516z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionRegularIcon);
export default ForwardRef;
