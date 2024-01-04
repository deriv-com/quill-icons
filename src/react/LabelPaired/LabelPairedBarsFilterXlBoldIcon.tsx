import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsFilterXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M0 10.125C.063 9.437.438 9.062 1.125 9h18.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H1.125C.437 11.187.062 10.812 0 10.125Zm3 7.5c.063-.688.438-1.063 1.125-1.125h12.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H4.125c-.688-.063-1.063-.438-1.125-1.125Zm10.5 7.5c-.063.688-.438 1.063-1.125 1.125h-3.75c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125h3.75c.688.063 1.063.438 1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlBoldIcon);
export default ForwardRef;
