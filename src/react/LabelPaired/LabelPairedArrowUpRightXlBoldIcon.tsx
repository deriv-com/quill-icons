import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightXlBoldIcon = (
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
        d='M15.375 10.5c.688.063 1.063.438 1.125 1.125v11.25c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-8.531L3.422 25.172c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594L12.656 12.75H4.125c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125h11.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlBoldIcon);
export default ForwardRef;
