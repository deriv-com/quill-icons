import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M0 8.625C.063 7.937.438 7.562 1.125 7.5h12.75c.438 0 .766.188.984.563.188.374.188.75 0 1.124L3.61 27.938c-.406.563-.921.704-1.546.422-.563-.406-.688-.922-.376-1.547L11.908 9.75H1.124C.437 9.687.062 9.312 0 8.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlBoldIcon);
export default ForwardRef;
