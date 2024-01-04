import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightXlBoldIcon = (
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
        d='M15.375 25.5H4.125c-.688-.063-1.063-.438-1.125-1.125.063-.688.438-1.063 1.125-1.125h8.531L1.828 12.422c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L14.25 21.656v-8.531c.063-.688.438-1.063 1.125-1.125.688.063 1.063.438 1.125 1.125v11.25c-.063.688-.438 1.063-1.125 1.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlBoldIcon);
export default ForwardRef;
