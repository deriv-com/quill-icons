import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandCaptionRegularIcon = (
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
        d='M3.625 4.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1v2.625c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-3c.016-.234.14-.36.375-.375zM.25 11.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375V14h2.625c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-3c-.234-.016-.36-.14-.375-.375zM10.375 4.25c.234.016.36.14.375.375v3c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V5H7.375c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375zM10 11.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375v3c-.016.234-.14.36-.375.375h-3c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H10z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionRegularIcon);
export default ForwardRef;
