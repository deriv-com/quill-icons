import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchCaptionRegularIcon = (
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
        d='M6 4.25v.375a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-1.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.25h-.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9c0 .219.07.398.21.54.142.14.321.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-.75 0h-1.5v.375h1.5zM.75 5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h4.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v9a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-4.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .75 14z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionRegularIcon);
export default ForwardRef;
