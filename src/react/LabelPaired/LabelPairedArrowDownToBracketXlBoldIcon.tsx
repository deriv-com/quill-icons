import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToBracketXlBoldIcon = (
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
        d='m17.297 16.172-6 6c-.531.437-1.063.437-1.594 0l-6-6c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l4.078 4.078V7.125C9.438 6.437 9.813 6.062 10.5 6c.688.063 1.063.438 1.125 1.125v11.531l4.078-4.078c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594ZM2.25 22.125v3.75c0 .531.188.969.563 1.313.343.375.78.562 1.312.562h12.75c.531 0 .969-.188 1.313-.563.375-.343.562-.78.562-1.312v-3.75c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v3.75c-.031 1.156-.438 2.125-1.219 2.906-.781.782-1.75 1.188-2.906 1.219H4.125c-1.156-.031-2.125-.438-2.906-1.219C.437 28 .03 27.031 0 25.875v-3.75c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketXlBoldIcon);
export default ForwardRef;
