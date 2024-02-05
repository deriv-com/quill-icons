import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineXlBoldIcon = (
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
      <path d='M1.125 7.5h15.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H1.125Q.095 9.657 0 8.625.095 7.595 1.125 7.5m8.719 6.375h-.047l6 6.375q.656.797-.047 1.547-.797.656-1.547-.047l-4.078-4.266v9.891Q10.032 28.407 9 28.5q-1.03-.093-1.125-1.125v-9.89l-4.078 4.312q-.75.656-1.547.047-.703-.798-.047-1.594l6-6.375Q8.532 13.5 9 13.5q.47 0 .844.375' />
    </g>
    <defs>
      <clipPath id='7fa302617f84616022818f05b63359a9__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlBoldIcon);
export default ForwardRef;
