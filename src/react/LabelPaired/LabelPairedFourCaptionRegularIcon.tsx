import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourCaptionRegularIcon = (
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
        d='M4.078 4.79.984 11H6.75V6.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375V11h1.125c.234.016.36.14.375.375-.016.234-.14.36-.375.375H7.5v2.625c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V11.75H.375a.38.38 0 0 1-.328-.164.398.398 0 0 1 0-.375l3.375-6.75c.11-.203.273-.258.492-.164.203.125.258.289.164.492'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionRegularIcon);
export default ForwardRef;
