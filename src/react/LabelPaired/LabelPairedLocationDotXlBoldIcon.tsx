import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotXlBoldIcon = (
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
      <path d='M15.75 15q-.093-2.86-1.969-4.781Q11.86 8.344 9 8.25q-2.86.094-4.781 1.969Q2.344 12.14 2.25 15q0 .89.703 2.672a32 32 0 0 0 2.016 3.75 92 92 0 0 0 2.062 3.14Q8.11 26.063 9 27.188q.89-1.125 1.969-2.625 1.078-1.5 2.062-3.14a32 32 0 0 0 2.016-3.75q.703-1.782.703-2.672M18 15q-.093 2.109-1.5 4.875a47 47 0 0 1-3.281 5.344q-1.828 2.625-3.094 4.172-.468.562-1.125.562-.655 0-1.125-.562-1.266-1.547-3.094-4.172A47 47 0 0 1 1.5 19.875Q.095 17.109 0 15q.095-3.843 2.625-6.375Q5.157 6.095 9 6q3.844.095 6.375 2.625Q17.907 11.157 18 15m-7.5 0q0-.656-.422-1.078Q9.657 13.5 9 13.5q-.656 0-1.078.422Q7.5 14.343 7.5 15t.422 1.078Q8.343 16.5 9 16.5t1.078-.422q.422-.421.422-1.078m-5.25 0q.046-2.109 1.875-3.234 1.875-1.032 3.75 0Q12.703 12.89 12.75 15q-.047 2.109-1.875 3.234-1.875 1.032-3.75 0Q5.297 17.11 5.25 15' />
    </g>
    <defs>
      <clipPath id='d2a0b0b133e4132fd74643c664ab5b6e__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotXlBoldIcon);
export default ForwardRef;
