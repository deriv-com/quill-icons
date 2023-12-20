import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightSmBoldIcon = (
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
        d='M12.715 10.285c.255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l4.785-4.785-4.785-4.785c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0zm-10.5-5.25 5.25 5.25c.255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93L6.07 10.75 1.285 5.965c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmBoldIcon);
export default ForwardRef;
