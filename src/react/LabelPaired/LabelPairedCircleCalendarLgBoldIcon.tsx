import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m8.125-5.625c.313 0 .625.313.625.625v.625h2.5V10.5c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.625h.625c1.016 0 1.875.86 1.875 1.875v5c0 1.055-.86 1.875-1.875 1.875h-6.25A1.85 1.85 0 0 1 5 18v-5c0-1.016.82-1.875 1.875-1.875H7.5V10.5c0-.312.273-.625.625-.625M6.875 18h6.25v-3.75h-6.25z' />
    </g>
    <defs>
      <clipPath id='631f868f518aaf697575645357d092ec__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarLgBoldIcon);
export default ForwardRef;
