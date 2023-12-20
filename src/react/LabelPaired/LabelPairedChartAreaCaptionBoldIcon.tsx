import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaCaptionBoldIcon = (
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
        d='M1.125 4.813v8.25c.031.343.219.53.563.562h9.75c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-9.75c-.485-.016-.883-.18-1.196-.492-.312-.313-.476-.711-.492-1.195v-8.25c.031-.344.219-.532.563-.563.343.031.53.219.562.563m5.578 3.984L5.25 7.344 3.375 9.219v2.156h6.75V9.547L8.93 8.164l-.633.633a1.085 1.085 0 0 1-.797.328c-.312 0-.578-.11-.797-.328M7.5 8l.797-.797.14-.14a.782.782 0 0 1 .54-.211.771.771 0 0 1 .539.257l1.453 1.711c.187.203.281.446.281.727v2.203a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H3a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.219c0-.313.11-.578.328-.797l2.133-2.133a.741.741 0 0 1 .539-.234c.203 0 .383.078.54.234l.913.914z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionBoldIcon);
export default ForwardRef;
