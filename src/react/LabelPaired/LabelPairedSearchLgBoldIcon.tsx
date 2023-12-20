import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.375 13.625c0-1.12-.273-2.161-.82-3.125a6.514 6.514 0 0 0-2.305-2.305 6.369 6.369 0 0 0-3.125-.82A6.369 6.369 0 0 0 5 8.195 6.514 6.514 0 0 0 2.695 10.5a6.226 6.226 0 0 0-.82 3.125c0 1.12.273 2.162.82 3.125A6.514 6.514 0 0 0 5 19.055c.99.547 2.031.82 3.125.82a6.368 6.368 0 0 0 3.125-.82 6.514 6.514 0 0 0 2.305-2.305c.547-.963.82-2.005.82-3.125m-1.21 6.367c-1.407 1.146-3.087 1.732-5.04 1.758-2.292-.052-4.206-.846-5.742-2.383C.846 17.831.053 15.917 0 13.625c.052-2.292.846-4.206 2.383-5.742 1.536-1.537 3.45-2.33 5.742-2.383 2.292.052 4.206.846 5.742 2.383 1.537 1.536 2.33 3.45 2.383 5.742-.026 1.953-.612 3.633-1.758 5.04l5.235 5.233c.364.443.364.886 0 1.329-.443.364-.886.364-1.329 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgBoldIcon);
export default ForwardRef;
