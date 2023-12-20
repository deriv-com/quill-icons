import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonCaptionRegularIcon = (
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
        d='M6.75 4.25h-4.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6h6V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m.75 7.5h-6V14c0 .219.07.398.21.54.142.14.321.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54zM2.25 3.5h4.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v9a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-4.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .75 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445m1.125 9.75c.016-.234.14-.36.375-.375h1.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-1.5c-.234-.016-.36-.14-.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionRegularIcon);
export default ForwardRef;
