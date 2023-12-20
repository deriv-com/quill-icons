import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowsRotateCaptionRegularIcon = (
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
        d='M1.617 8.445h.024c-.063.188-.196.29-.399.305-.265-.031-.383-.172-.351-.422.28-1.187.89-2.156 1.828-2.906C3.64 4.672 4.734 4.282 6 4.25c.969.016 1.844.25 2.625.703A5.194 5.194 0 0 1 10.5 6.805v-1.43c.016-.234.14-.36.375-.375.234.016.36.14.375.375v2.25c-.016.234-.14.36-.375.375h-2.25c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h1.266a4.403 4.403 0 0 0-1.618-1.64C7.602 5.218 6.843 5.015 6 5c-1.078.016-2.016.344-2.812.984-.782.625-1.305 1.446-1.57 2.461m8.766 2.133v-.023c.047-.188.172-.29.375-.305.265.031.383.172.351.422-.28 1.187-.882 2.156-1.804 2.906-.938.75-2.04 1.14-3.305 1.172-.969-.016-1.844-.25-2.625-.703A5.256 5.256 0 0 1 1.5 12.219v1.406c-.016.234-.14.36-.375.375-.219-.016-.344-.14-.375-.375v-2.25c.031-.234.156-.36.375-.375h2.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H2.109c.391.688.93 1.234 1.618 1.64.671.391 1.43.594 2.273.61 1.078-.016 2.016-.344 2.813-.984.78-.625 1.304-1.438 1.57-2.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionRegularIcon);
export default ForwardRef;
