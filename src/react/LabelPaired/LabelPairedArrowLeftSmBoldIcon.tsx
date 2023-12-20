import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.566 11.215a.633.633 0 0 1-.191-.465c0-.182.064-.337.191-.465L5.38 5.691c.328-.255.638-.255.93 0 .255.329.246.638-.028.93l-3.61 3.473h9.298c.4.036.62.255.656.656-.037.401-.255.62-.656.656H2.672l3.637 3.473c.255.292.255.601 0 .93-.292.255-.593.255-.903 0L.594 11.215z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmBoldIcon);
export default ForwardRef;
