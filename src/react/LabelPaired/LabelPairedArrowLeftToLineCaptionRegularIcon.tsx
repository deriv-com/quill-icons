import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineCaptionRegularIcon = (
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
        d='M.25 13.625v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375m2.367-4.383 3-3c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L3.789 9.125h6.586c.234.016.36.14.375.375-.016.234-.14.36-.375.375H3.79l2.343 2.367c.156.172.156.344 0 .516-.172.156-.344.156-.516 0l-3-3c-.156-.172-.156-.344 0-.516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionRegularIcon);
export default ForwardRef;