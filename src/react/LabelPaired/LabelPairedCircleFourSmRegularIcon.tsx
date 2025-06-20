import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m6.262-3.445c.246.082.355.328.246.547l-1.504 3.773h2.871V9.438A.45.45 0 0 1 8.313 9a.47.47 0 0 1 .437.438v2.187h.438a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H8.75v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5h-3.5c-.164 0-.3-.055-.383-.191a.39.39 0 0 1-.027-.383l1.75-4.375c.082-.246.328-.356.574-.246z' />
    </g>
    <defs>
      <clipPath id='17a1dec0339032eee38e790abfb4ebd6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourSmRegularIcon);
export default ForwardRef;
