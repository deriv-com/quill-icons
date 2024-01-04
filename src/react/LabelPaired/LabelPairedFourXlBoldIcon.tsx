import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFourXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.86 9.14 3 20.25h9.75v-7.125c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v7.125h1.875c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H15v4.875c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125V22.5H1.125c-.406 0-.734-.188-.984-.563-.188-.343-.188-.703 0-1.078L6.89 8.11c.375-.593.875-.75 1.5-.468.593.375.75.875.468 1.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlBoldIcon);
export default ForwardRef;
