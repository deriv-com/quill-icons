import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZCaptionRegularIcon = (
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
        d='m4.258 4.367 2.25 2.25c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L4.375 5.539v8.836c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V5.539L2.008 7.133c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.25-2.25c.172-.156.344-.156.516 0M8.5 10.25h3c.156 0 .266.07.328.21a.402.402 0 0 1-.023.4L9.273 14H11.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-3a.332.332 0 0 1-.328-.21.371.371 0 0 1 .047-.4L10.727 11H8.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375m1.5-6c.156 0 .266.07.328.21l1.5 3h.024l.351.75c.094.22.04.384-.164.493-.203.094-.367.04-.492-.164L11.266 8H8.734l-.28.54c-.11.202-.274.257-.493.163-.203-.11-.258-.273-.164-.492l.375-.75 1.5-3A.332.332 0 0 1 10 4.25m-.89 3h1.78L10 5.469z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionRegularIcon);
export default ForwardRef;
