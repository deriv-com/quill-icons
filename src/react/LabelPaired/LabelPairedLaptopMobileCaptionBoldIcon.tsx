import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileCaptionBoldIcon = (
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
        d='M3 4.625c-.234.016-.36.14-.375.375v6H8.25v1.5H1.125a1.223 1.223 0 0 1-.797-.328A1.223 1.223 0 0 1 0 11.375c.016-.234.14-.36.375-.375H1.5V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v.75h-1.125V5c-.016-.234-.14-.36-.375-.375zm6 3c.016-.312.125-.578.328-.797.219-.203.485-.312.797-.328h3.75c.313.016.578.125.797.328.203.219.312.484.328.797v6.75a1.223 1.223 0 0 1-.328.797 1.223 1.223 0 0 1-.797.328h-3.75a1.223 1.223 0 0 1-.797-.328A1.223 1.223 0 0 1 9 14.375zm1.125 0v6.75h3.75v-6.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionBoldIcon);
export default ForwardRef;
