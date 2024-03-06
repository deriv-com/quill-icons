import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.875 28.5H1.125Q.095 28.407 0 27.375q.095-1.03 1.125-1.125h15.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125m-8.672-6.375v.047l-6-6.375q-.656-.844.047-1.594.797-.656 1.594.047l4.031 4.313V8.625Q7.97 7.595 9 7.5q1.032.095 1.125 1.125v9.938l4.078-4.313q.75-.703 1.594-.047.656.75.047 1.547l-6 6.375Q9.469 22.5 9 22.5t-.797-.375' />
    </g>
    <defs>
      <clipPath id='45dce08093609561acdb0e781a2425c9__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlBoldIcon);
export default ForwardRef;
