import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPauseCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.375 5.75c-.234.016-.36.14-.375.375v6.75c.016.234.14.36.375.375H2.5c.234-.016.36-.14.375-.375v-6.75c-.016-.234-.14-.36-.375-.375zM.25 6.125c.016-.312.125-.578.328-.797.219-.203.485-.312.797-.328H2.5c.313.016.578.125.797.328.203.219.312.484.328.797v6.75a1.223 1.223 0 0 1-.328.797A1.223 1.223 0 0 1 2.5 14H1.375a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797zM5.5 5.75c-.234.016-.36.14-.375.375v6.75c.016.234.14.36.375.375h1.125c.234-.016.36-.14.375-.375v-6.75c-.016-.234-.14-.36-.375-.375zm-1.125.375c.016-.312.125-.578.328-.797.219-.203.484-.312.797-.328h1.125c.313.016.578.125.797.328.203.219.312.484.328.797v6.75a1.223 1.223 0 0 1-.328.797 1.223 1.223 0 0 1-.797.328H5.5a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionRegularIcon);
export default ForwardRef;
