import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftSmBoldIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.285 10.285 5.25-5.25c.31-.255.62-.255.93 0 .255.31.255.62 0 .93L2.68 10.75l4.785 4.785c.255.31.255.62 0 .93-.31.255-.62.255-.93 0l-5.25-5.25c-.255-.31-.255-.62 0-.93Zm10.5-5.25c.31-.255.62-.255.93 0 .255.31.255.62 0 .93L7.93 10.75l4.785 4.785c.255.31.255.62 0 .93-.31.255-.62.255-.93 0l-5.25-5.25c-.255-.31-.255-.62 0-.93l5.25-5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmBoldIcon);
export default ForwardRef;
