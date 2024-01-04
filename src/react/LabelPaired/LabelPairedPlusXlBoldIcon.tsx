import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.625 9.375v7.5h7.5c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-7.5v7.5c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-7.5h-7.5C1.187 19.062.812 18.687.75 18c.063-.688.438-1.063 1.125-1.125h7.5v-7.5c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlBoldIcon);
export default ForwardRef;
