import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.875 3.875v11.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V3.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375M10.5 5.75c.234.016.36.14.375.375v9c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9c.016-.234.14-.36.375-.375M7.875 8.375v6.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-6.75c.016-.234.14-.36.375-.375.234.016.36.14.375.375M4.5 10.25c.234.016.36.14.375.375v4.5c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-4.5c.016-.234.14-.36.375-.375m-3 2.25c.234.016.36.14.375.375v2.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-2.25c.016-.234.14-.36.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionRegularIcon);
export default ForwardRef;
