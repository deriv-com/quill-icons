import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileChartColumnCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.125 14c.016.234.14.36.375.375h6c.234-.016.36-.14.375-.375V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5c-.234.016-.36.14-.375.375zM1.5 3.5h3.89c.407 0 .758.148 1.055.445l2.11 2.11c.297.297.445.656.445 1.078V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445m3.563 6.563v3c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562v-3c.03-.344.218-.532.562-.563.344.031.531.219.563.563m2.062.75v2.25c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562v-2.25c.031-.344.219-.532.563-.563.343.031.53.219.562.563M3 11.563v1.5c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562v-1.5c.031-.344.219-.532.563-.563.343.031.53.219.562.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnCaptionBoldIcon);
export default ForwardRef;
