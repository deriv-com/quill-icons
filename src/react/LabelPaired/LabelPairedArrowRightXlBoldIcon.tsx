import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightXlBoldIcon = (
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
        d='m20.672 18.797-8.25 7.875c-.563.437-1.094.437-1.594 0-.437-.563-.437-1.094 0-1.594l6.235-5.953H1.124C.437 19.062.062 18.687 0 18c.063-.688.438-1.063 1.125-1.125h15.938l-6.188-5.953c-.469-.5-.484-1.031-.047-1.594.5-.437 1.031-.437 1.594 0l8.25 7.875c.219.219.328.485.328.797 0 .313-.11.578-.328.797Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlBoldIcon);
export default ForwardRef;
