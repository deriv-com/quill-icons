import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M15.234 25.266 9 19.078l-6.188 6.188c-.374.28-.734.28-1.078 0-.28-.344-.28-.688 0-1.032L7.922 18l-6.188-6.188c-.28-.374-.28-.734 0-1.078.344-.28.704-.28 1.079 0L9 16.922l6.234-6.188c.344-.28.688-.28 1.032 0 .28.344.28.704 0 1.079L10.078 18l6.188 6.234c.28.344.28.688 0 1.032-.344.28-.688.28-1.032 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlRegularIcon);
export default ForwardRef;
