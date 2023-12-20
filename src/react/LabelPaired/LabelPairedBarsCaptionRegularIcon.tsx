import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsCaptionRegularIcon = (
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
        d='M.25 5.375c.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375m0 3.75c.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375m10.5 3.75c-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionRegularIcon);
export default ForwardRef;
