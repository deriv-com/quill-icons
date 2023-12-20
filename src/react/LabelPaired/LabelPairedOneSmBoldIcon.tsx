import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 7 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.156 5.281v10.282h2.188c.4.036.62.255.656.656-.036.4-.255.62-.656.656H.656c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657h2.188V6.458L.984 7.578c-.346.182-.647.119-.902-.191-.164-.365-.091-.666.219-.903l2.844-1.75a.701.701 0 0 1 .683-.027.623.623 0 0 1 .328.574'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmBoldIcon);
export default ForwardRef;
