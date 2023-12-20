import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTableLayoutCaptionRegularIcon = (
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
        d='M10.5 5h-9a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v1.5h10.5v-1.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21M.75 13.25c0 .219.07.398.21.54.142.14.321.21.54.21h2.25V8h-3zM4.5 14h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8H4.5zm-3-9.75h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutCaptionRegularIcon);
export default ForwardRef;
