import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.125Q.095 9.095 1.125 9h18.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H1.125Q.095 11.157 0 10.125m0 7.5q.095-1.03 1.125-1.125h18.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H1.125Q.095 18.657 0 17.625m21 7.5q-.093 1.032-1.125 1.125H1.125Q.095 26.157 0 25.125.095 24.095 1.125 24h18.75q1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='dda0a7e7e8d93fd7618ec2cd0eee498c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsXlBoldIcon);
export default ForwardRef;
