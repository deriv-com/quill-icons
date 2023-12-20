import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeCaptionRegularIcon = (
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
        d='M0 4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375zm1.5 0c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375zm1.875-.375c.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75c.016-.234.14-.36.375-.375m1.875.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375zm1.875-.375c.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75c.016-.234.14-.36.375-.375M9 4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375zm2.625-.375c.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75c.016-.234.14-.36.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionRegularIcon);
export default ForwardRef;
