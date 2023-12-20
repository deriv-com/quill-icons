import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneCaptionBoldIcon = (
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
        d='M1.5 14.375h5.25c.234-.016.36-.14.375-.375v-1.5H8.25V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H1.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V8.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445H3v1.125H1.5c-.234.016-.36.14-.375.375V14c.016.234.14.36.375.375m3.75-3.75h5.25c.234-.016.36-.14.375-.375V5c-.016-.234-.14-.36-.375-.375H5.25c-.234.016-.36.14-.375.375v5.25c.016.234.14.36.375.375m-1.5-.375V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.25c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v5.25a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H5.25a1.515 1.515 0 0 1-1.055-.445 1.515 1.515 0 0 1-.445-1.055'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionBoldIcon);
export default ForwardRef;
