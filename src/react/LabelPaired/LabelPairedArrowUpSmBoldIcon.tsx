import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.965 4.816v.028l4.594 4.812c.255.31.255.61 0 .903-.328.255-.638.255-.93 0L6.156 6.922v9.297c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V6.922l-3.473 3.61c-.292.273-.601.282-.93.027-.255-.292-.255-.602 0-.93l4.594-4.813a.633.633 0 0 1 .465-.191c.182 0 .337.064.465.191'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmBoldIcon);
export default ForwardRef;
