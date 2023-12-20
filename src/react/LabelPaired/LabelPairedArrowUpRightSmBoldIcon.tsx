import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightSmBoldIcon = (
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
        d='M9.219 6.375c.4.036.62.255.656.656v6.563c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V8.617l-6.317 6.317c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l6.317-6.316H2.656c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmBoldIcon);
export default ForwardRef;
