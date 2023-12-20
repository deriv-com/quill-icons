import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownCaptionRegularIcon = (
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
        d='m4.258 4.367 2.25 2.25c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L4.375 5.539v8.836c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V5.539L2.008 7.133c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.25-2.25c.172-.156.344-.156.516 0m8.25 8.016-2.25 2.25c-.172.156-.344.156-.516 0l-2.25-2.25c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l1.617 1.594V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.836l1.617-1.594c.172-.156.344-.156.516 0 .156.172.156.344 0 .516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionRegularIcon);
export default ForwardRef;
