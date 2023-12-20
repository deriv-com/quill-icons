import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.535 16.465-5.25-5.25c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L7 15.07l4.785-4.785c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0m-5.25-10.5c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L7 9.82l4.785-4.785c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmBoldIcon);
export default ForwardRef;
