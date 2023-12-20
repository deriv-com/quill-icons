import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleCheckCaptionBoldIcon = (
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
        d='M1.5 14.375h6c.234-.016.36-.14.375-.375V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5c-.234.016-.36.14-.375.375v9c.016.234.14.36.375.375M1.5 3.5h3.89c.407 0 .758.148 1.055.445l2.11 2.11c.297.297.445.656.445 1.078V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445m5.273 6.281-2.507 2.485a.542.542 0 0 1-.399.164.542.542 0 0 1-.398-.164l-1.242-1.243c-.22-.265-.22-.53 0-.796.265-.22.53-.22.796 0l.844.843 2.11-2.086c.265-.218.53-.218.796 0 .22.266.22.532 0 .797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckCaptionBoldIcon);
export default ForwardRef;
