import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSterlingSignCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 7.063V9.5h3.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-3.75a9.176 9.176 0 0 1-.89 3.75h6.14c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625a.367.367 0 0 1-.328-.187.398.398 0 0 1 0-.376l.023-.046a8.729 8.729 0 0 0 1.055-3.891h-.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h.75V7.063c.016-.797.29-1.461.82-1.993.532-.53 1.196-.804 1.993-.82h.164c.312 0 .609.047.89.14l1.875.633c.203.094.281.25.235.47-.094.218-.25.296-.47.234l-1.874-.61A1.94 1.94 0 0 0 4.352 5h-.165c-.578.016-1.062.219-1.453.61-.39.39-.593.874-.609 1.452'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionRegularIcon);
export default ForwardRef;
