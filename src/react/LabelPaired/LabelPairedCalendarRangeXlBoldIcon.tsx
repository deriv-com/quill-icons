import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.625 7.125V9h6.75V7.125Q15.47 6.095 16.5 6q1.032.095 1.125 1.125V9H19.5q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89h-15q-1.266-.047-2.11-.89-.843-.844-.89-2.11V12q.047-1.266.89-2.11.844-.843 2.11-.89h1.875V7.125Q6.47 6.095 7.5 6q1.032.095 1.125 1.125M3.75 15v12q.046.704.75.75h15q.704-.046.75-.75V15zM6 19.5q0-.656.422-1.078Q6.843 18 7.5 18t1.078.422T9 19.5t-.422 1.078Q8.157 21 7.5 21q-.656 0-1.078-.422Q6 20.157 6 19.5m10.5 3q.657 0 1.078.422Q18 23.343 18 24t-.422 1.078q-.421.422-1.078.422-.656 0-1.078-.422Q15 24.657 15 24q0-.656.422-1.078.421-.422 1.078-.422m-6-3q.095-1.03 1.125-1.125h5.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-5.25q-1.03-.093-1.125-1.125m1.875 3.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-5.25Q6.095 25.032 6 24q.095-1.03 1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='076262e4f2db08e73725ccaa9ec029a5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeXlBoldIcon);
export default ForwardRef;
