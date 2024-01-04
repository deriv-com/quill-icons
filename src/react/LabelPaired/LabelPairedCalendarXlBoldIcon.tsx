import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M7.125 7.125V9h6.75V7.125C13.938 6.437 14.313 6.062 15 6c.688.063 1.063.438 1.125 1.125V9H18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h1.875V7.125C4.938 6.437 5.313 6.062 6 6c.688.063 1.063.438 1.125 1.125ZM2.25 15v12c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75V15H2.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarXlBoldIcon);
export default ForwardRef;
