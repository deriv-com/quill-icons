import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineCaptionRegularIcon = (
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
        d='M10.75 5.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375M8.383 9.758l-3 3c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.344-2.367H.625C.391 9.859.265 9.735.25 9.5c.016-.234.14-.36.375-.375H7.21L4.868 6.758c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l3 3c.156.172.156.344 0 .516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionRegularIcon);
export default ForwardRef;
