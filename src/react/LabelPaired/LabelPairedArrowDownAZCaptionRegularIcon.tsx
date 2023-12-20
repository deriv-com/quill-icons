import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZCaptionRegularIcon = (
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
        d='m6.508 12.383-2.25 2.25c-.172.156-.344.156-.516 0l-2.25-2.25c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l1.617 1.594V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.836l1.617-1.594c.172-.156.344-.156.516 0 .156.172.156.344 0 .516m3.82-7.922 1.5 2.976v.024l.375.75c.094.203.04.367-.164.492-.219.094-.383.04-.492-.164L11.266 8H8.734l-.28.54c-.126.202-.29.257-.493.163-.203-.11-.258-.273-.164-.492l.351-.75h.024l1.5-3A.332.332 0 0 1 10 4.25c.156 0 .266.07.328.21M10 5.469 9.11 7.25h1.78zM8.5 10.25h3c.156 0 .266.07.328.21a.402.402 0 0 1-.023.4L9.273 14H11.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-3a.332.332 0 0 1-.328-.21.371.371 0 0 1 .047-.4L10.727 11H8.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionRegularIcon);
export default ForwardRef;
