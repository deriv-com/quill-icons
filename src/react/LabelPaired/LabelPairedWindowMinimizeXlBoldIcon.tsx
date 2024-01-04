import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.125 26.25h21.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H1.125C.437 28.437.062 28.062 0 27.375c.063-.688.438-1.063 1.125-1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeXlBoldIcon);
export default ForwardRef;
