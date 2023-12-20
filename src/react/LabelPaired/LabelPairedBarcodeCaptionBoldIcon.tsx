import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.563 4.25c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V4.813c.031-.344.219-.532.563-.563m2.062 0c.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75c.016-.234.14-.36.375-.375m1.688 0c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V4.813c.031-.344.219-.532.563-.563m2.625 0c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V4.813c.031-.344.219-.532.563-.563m3.937.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v9.375c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562zm-1.5-.188c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionBoldIcon);
export default ForwardRef;
