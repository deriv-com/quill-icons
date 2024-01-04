import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftXlBoldIcon = (
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
        d='M.328 18.797A1.085 1.085 0 0 1 0 18c0-.313.11-.578.328-.797l8.25-7.875c.563-.437 1.094-.437 1.594 0 .437.563.422 1.094-.047 1.594l-6.188 5.953h15.938c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H3.937l6.235 5.953c.437.5.437 1.031 0 1.594-.5.437-1.016.437-1.547 0l-8.25-7.875H.328Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlBoldIcon);
export default ForwardRef;
