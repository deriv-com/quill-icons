import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationCaptionBoldIcon = (
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
        d='m5.813 5.469-4.641 7.64a.333.333 0 0 0-.047.188c.016.203.133.312.352.328h9.07c.203-.016.312-.125.328-.328a.415.415 0 0 0-.047-.188l-4.64-7.64A.223.223 0 0 0 6 5.375a.223.223 0 0 0-.187.094m-.961-.586c.28-.406.664-.617 1.148-.633.5.016.883.227 1.148.633l4.641 7.64c.14.235.211.493.211.774-.016.406-.156.75-.422 1.031a1.536 1.536 0 0 1-1.031.422h-9.07c-.422-.016-.774-.156-1.055-.422A1.537 1.537 0 0 1 0 13.297c0-.281.07-.54.21-.774zm1.898 7.242a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54m-.187-4.312v2.25c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562v-2.25c.03-.344.218-.532.562-.563.344.031.531.219.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionBoldIcon);
export default ForwardRef;
