import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m14.59 14.059-2.625 2.625c-.31.255-.62.255-.93 0L8.41 14.059c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l1.504 1.504V5.28c.036-.4.255-.62.656-.656.401.036.62.255.656.656v9.352l1.504-1.504c.31-.255.62-.255.93 0 .255.31.255.62 0 .93M4.965 4.816 7.59 7.441c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L5.156 6.867v9.352c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656V6.867L2.34 8.371c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l2.625-2.625c.31-.255.62-.255.93 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmBoldIcon);
export default ForwardRef;
