import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M9.797 7.828v.047l7.875 8.25c.437.531.437 1.047 0 1.547-.563.437-1.094.437-1.594 0l-5.953-6.235v15.938c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125V11.437l-5.953 6.188c-.5.469-1.031.484-1.594.047-.437-.5-.437-1.031 0-1.594l7.875-8.25C8.422 7.61 8.688 7.5 9 7.5c.313 0 .578.11.797.328Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlBoldIcon);
export default ForwardRef;
