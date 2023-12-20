import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTableLayoutCaptionBoldIcon = (
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
        d='M10.5 5.375h-9c-.234.016-.36.14-.375.375v1.5h9.75v-1.5c-.016-.234-.14-.36-.375-.375M1.125 13.25c.016.234.14.36.375.375h1.875v-5.25h-2.25zm3.375.375h6c.234-.016.36-.14.375-.375V8.375H4.5zm-3-9.375h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutCaptionBoldIcon);
export default ForwardRef;
