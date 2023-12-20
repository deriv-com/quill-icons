import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.191 17.34.566 14.715c-.255-.31-.255-.62 0-.93l2.625-2.625c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-1.504 1.504h9.352c.4.036.62.255.656.656-.037.401-.255.62-.656.656H2.617l1.504 1.504c.255.31.255.62 0 .93-.31.255-.62.255-.93 0m9.243-9.625L9.809 10.34c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l1.504-1.504H1.03c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656h9.352L8.879 5.09c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l2.625 2.625c.255.31.255.62 0 .93'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmBoldIcon);
export default ForwardRef;
