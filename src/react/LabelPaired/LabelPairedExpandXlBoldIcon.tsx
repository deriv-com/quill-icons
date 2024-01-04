import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M6.375 7.5c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H2.25v4.125c-.063.688-.438 1.063-1.125 1.125C.437 14.937.062 14.562 0 13.875v-5.25C.063 7.937.438 7.562 1.125 7.5h5.25ZM0 22.125c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v4.125h4.125c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-5.25C.437 28.437.062 28.062 0 27.375v-5.25ZM19.875 7.5c.688.063 1.063.438 1.125 1.125v5.25c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125V9.75h-4.125c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125h5.25ZM18.75 22.125c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v5.25c-.063.688-.438 1.063-1.125 1.125h-5.25c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125h4.125v-4.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlBoldIcon);
export default ForwardRef;
