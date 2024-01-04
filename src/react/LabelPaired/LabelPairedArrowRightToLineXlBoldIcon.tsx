import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineXlBoldIcon = (
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
        d='M21 10.125v15.75c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-15.75c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125Zm-6.375 8.719.047-.047-6.375 6c-.563.437-1.094.422-1.594-.047-.437-.531-.422-1.047.047-1.547l4.313-4.078H1.124C.437 19.062.062 18.687 0 18c.063-.688.438-1.063 1.125-1.125h9.938L6.75 12.797c-.469-.5-.484-1.016-.047-1.547.5-.469 1.016-.484 1.547-.047l6.375 6c.25.219.375.485.375.797 0 .313-.125.594-.375.844Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlBoldIcon);
export default ForwardRef;
