import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressCaptionRegularIcon = (
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
        d='M4 4.625v3c-.016.234-.14.36-.375.375h-3c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H3.25V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375M.625 11h3c.234.016.36.14.375.375v3c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V11.75H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375M7.75 4.625V7.25h2.625c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-3c-.234-.016-.36-.14-.375-.375v-3c.016-.234.14-.36.375-.375.234.016.36.14.375.375M7.375 11h3c.234.016.36.14.375.375-.016.234-.14.36-.375.375H7.75v2.625c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3c.016-.234.14-.36.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionRegularIcon);
export default ForwardRef;
