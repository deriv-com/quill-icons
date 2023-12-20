import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFlagCheckeredCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1 3.875v1.008l2.297-.633c1-.25 1.96-.156 2.883.281.484.25 1 .367 1.547.352a3.374 3.374 0 0 0 1.546-.422l.352-.211c.266-.14.516-.14.75 0 .234.125.36.336.375.633v6.633a.755.755 0 0 1-.445.68l-.727.304a4.38 4.38 0 0 1-1.828.352 4.134 4.134 0 0 1-1.805-.47 3.711 3.711 0 0 0-2.554-.257L1 12.781v2.344c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V3.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375m0 1.781V7.11l2.25-.468V5.047zm0 2.227v1.664l2.25-.469V7.391zm3-.656V8.89a3.451 3.451 0 0 1 1.594.093L7 9.383v-1.64a.91.91 0 0 0-.117-.048l-1.5-.422a2.584 2.584 0 0 0-1.29-.046zm3.75.632v1.688c.36.031.71.008 1.055-.07L10 9.195V7.531l-1.008.235a4.212 4.212 0 0 1-1.242.093M7 10.18a.909.909 0 0 0-.117-.046l-1.5-.422a2.584 2.584 0 0 0-1.29-.047H4v1.617a4.251 4.251 0 0 1 2.273.446c.235.109.477.195.727.257zm.75 1.923a3.556 3.556 0 0 0 1.547-.305l.703-.281V9.969l-1.008.234c-.422.094-.836.125-1.242.094zm0-4.993c.36.032.71.008 1.055-.07L10 6.758V4.906l-.375.188a3.876 3.876 0 0 1-1.875.539zM7 5.586a3.949 3.949 0 0 1-1.172-.375A3.357 3.357 0 0 0 4 4.883v1.594a3.246 3.246 0 0 1 1.594.07L7 6.969zM1 10.32v1.688l2.18-.586a.179.179 0 0 1 .07-.024v-1.57z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionRegularIcon);
export default ForwardRef;
