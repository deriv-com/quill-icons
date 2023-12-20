import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareCaptionRegularIcon = (
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
        d='M7.875 3.5h3.75c.234.016.36.14.375.375v3.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V4.789l-5.742 5.719c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l5.719-5.742H7.875c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375M1.5 4.25h3.375c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14c0 .219.07.398.21.54.142.14.321.21.54.21h8.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-3.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H1.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionRegularIcon);
export default ForwardRef;
