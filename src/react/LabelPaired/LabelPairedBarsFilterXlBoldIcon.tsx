import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterXlBoldIcon = (
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
      <path d='M0 10.125Q.095 9.095 1.125 9h18.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H1.125Q.095 11.157 0 10.125m3 7.5q.095-1.03 1.125-1.125h12.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H4.125Q3.095 18.657 3 17.625m10.5 7.5q-.093 1.032-1.125 1.125h-3.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h3.75q1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='2e3073799558415311ae8f2930c20b1b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlBoldIcon);
export default ForwardRef;
