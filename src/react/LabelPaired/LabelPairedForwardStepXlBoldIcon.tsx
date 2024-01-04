import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 10.125c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v15.75c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-4.922l-8.297 5.813c-.25.156-.515.234-.797.234-.406 0-.734-.14-.984-.422C.89 26.328.75 26 .75 25.594V10.406c0-.406.14-.734.422-.984.25-.281.578-.422.984-.422.313 0 .578.078.797.234l8.297 5.813v-4.922Zm0 8.063v-.375L3 12.046V24l8.25-5.813Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlBoldIcon);
export default ForwardRef;
