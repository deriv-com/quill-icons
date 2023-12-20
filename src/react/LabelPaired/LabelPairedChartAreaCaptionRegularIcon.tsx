import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaCaptionRegularIcon = (
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
        d='M.75 4.625v8.25c.016.313.125.578.328.797.219.203.484.312.797.328h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-9.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375m6.21 3.914L5.25 6.805 3.117 8.96A.312.312 0 0 0 3 9.219v2.531h7.5V9.547a.403.403 0 0 0-.094-.258L8.953 7.602l-.914.937a.782.782 0 0 1-.539.211.782.782 0 0 1-.54-.21m0-1.078L7.5 8l.54-.54.398-.397a.782.782 0 0 1 .539-.211.771.771 0 0 1 .539.257l1.453 1.711c.187.203.281.446.281.727v2.203a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H3a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.219c0-.313.11-.578.328-.797l2.133-2.133a.741.741 0 0 1 .539-.234c.203 0 .383.078.54.234z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionRegularIcon);
export default ForwardRef;
