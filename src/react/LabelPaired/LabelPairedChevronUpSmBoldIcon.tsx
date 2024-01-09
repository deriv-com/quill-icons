import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6.535 6.785c.31-.255.62-.255.93 0l5.25 5.25c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L7 8.18l-4.785 4.785c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93z' />
    </g>
    <defs>
      <clipPath id='2c2ceed5661a8e7863e680f70a090393__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmBoldIcon);
export default ForwardRef;
