import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLeftXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M2.625 25.5c-.688-.063-1.063-.438-1.125-1.125v-11.25c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v8.531l10.828-10.828c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L5.344 23.25h8.531c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H2.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlBoldIcon);
export default ForwardRef;
