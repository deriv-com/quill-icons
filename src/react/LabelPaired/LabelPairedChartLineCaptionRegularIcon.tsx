import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineCaptionRegularIcon = (
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
        d='M.75 4.625v8.25c.016.313.125.578.328.797.219.203.484.312.797.328h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-9.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375m10.383 2.508-3.375 3.375c-.172.156-.344.156-.516 0L5.25 8.539l-2.367 2.344c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.625-2.625c.172-.156.344-.156.516 0L7.5 9.711l3.117-3.094c.172-.156.344-.156.516 0 .156.172.156.344 0 .516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionRegularIcon);
export default ForwardRef;
