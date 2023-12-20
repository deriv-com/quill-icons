import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusCaptionRegularIcon = (
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
        d='M5.875 5v4.125H10c.234.016.36.14.375.375-.016.234-.14.36-.375.375H5.875V14c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V9.875H1C.766 9.859.64 9.735.625 9.5c.016-.234.14-.36.375-.375h4.125V5c.016-.234.14-.36.375-.375.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionRegularIcon);
export default ForwardRef;
