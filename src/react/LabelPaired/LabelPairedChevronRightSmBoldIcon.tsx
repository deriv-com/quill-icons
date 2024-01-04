import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.465 10.285c.255.31.255.62 0 .93l-5.25 5.25c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93L7.07 10.75 2.285 5.965c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l5.25 5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmBoldIcon);
export default ForwardRef;
