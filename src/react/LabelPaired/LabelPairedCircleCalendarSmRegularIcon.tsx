import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m5.688-4.375a.47.47 0 0 1 .437.438v.437h1.75v-.437a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v.437h.438c.71 0 1.312.602 1.312 1.313v4.375c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 12.938V8.563c0-.711.574-1.313 1.313-1.313h.437v-.437a.45.45 0 0 1 .438-.438M4.375 8.563V9h5.25v-.437a.47.47 0 0 0-.437-.438H4.813a.45.45 0 0 0-.438.438m5.25 1.312h-5.25v3.063c0 .246.191.437.438.437h4.375a.45.45 0 0 0 .437-.437z' />
    </g>
    <defs>
      <clipPath id='a36c171ee64b52f4f43c82e41bddb1e3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarSmRegularIcon);
export default ForwardRef;
