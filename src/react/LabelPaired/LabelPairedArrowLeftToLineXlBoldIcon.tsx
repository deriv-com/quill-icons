import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineXlBoldIcon = (
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
        d='M0 25.875v-15.75C.063 9.437.438 9.062 1.125 9c.688.063 1.063.438 1.125 1.125v15.75c-.063.688-.438 1.063-1.125 1.125C.437 26.937.062 26.562 0 25.875Zm6.375-8.672 6.375-6c.531-.437 1.047-.422 1.547.047.437.531.422 1.063-.047 1.594l-4.266 4.031h9.891c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-9.89l4.312 4.078c.437.5.453 1.031.047 1.594-.531.437-1.063.453-1.594.047l-6.375-6C6.125 18.594 6 18.312 6 18c0-.313.125-.578.375-.797Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlBoldIcon);
export default ForwardRef;
