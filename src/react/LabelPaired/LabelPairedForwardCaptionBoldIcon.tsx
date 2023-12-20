import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardCaptionBoldIcon = (
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
        d='M5.25 5.703c0-.203.07-.367.21-.492.126-.14.29-.211.493-.211.156 0 .297.047.422.14l5.39 3.915c.157.11.235.258.235.445a.516.516 0 0 1-.234.445L6.375 13.86a.686.686 0 0 1-.422.141.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493v-2.32l-4.148 2.906A.74.74 0 0 1 .703 14a.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493V5.703c0-.203.07-.367.21-.492C.337 5.07.5 5 .704 5c.156 0 .29.04.399.117L5.25 8.023zm0 3.703L1.125 6.523V12.5L5.25 9.594zm5.227.094L6.375 6.523v5.954z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionBoldIcon);
export default ForwardRef;
