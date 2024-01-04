import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsDownSmBoldIcon = (
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
        d='m6.535 16.465-5.25-5.25c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L7 15.07l4.785-4.785c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0Zm-5.25-10.5c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L7 9.82l4.785-4.785c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0l-5.25-5.25Z'
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
