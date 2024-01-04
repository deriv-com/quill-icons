import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronDownSmBoldIcon = (
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
        d='m6.535 14.715-5.25-5.25c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L7 13.32l4.785-4.785c.31-.255.62-.255.93 0 .255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownSmBoldIcon);
export default ForwardRef;
