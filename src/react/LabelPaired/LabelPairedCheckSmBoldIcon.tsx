import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.434 6.566c.255.31.255.62 0 .93l-7.22 7.219c-.31.255-.619.255-.929 0L.566 10.996c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L4.75 13.32l6.754-6.754c.31-.255.62-.255.93 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckSmBoldIcon);
export default ForwardRef;
