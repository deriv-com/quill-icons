import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusXlBoldIcon = (
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
      <path d='M11.625 9.375v7.5h7.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-7.5v7.5q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-7.5h-7.5Q.845 19.032.75 18q.095-1.03 1.125-1.125h7.5v-7.5Q9.47 8.345 10.5 8.25q1.032.095 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='772d47d8a68791bf7f232795ad2ffc7f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlBoldIcon);
export default ForwardRef;
