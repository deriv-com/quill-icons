import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarXlRegularIcon = (
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
      <path d='M5.25 6q.704.046.75.75V9h9V6.75q.047-.703.75-.75.704.046.75.75V9H18q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V12q.047-1.266.89-2.11Q1.735 9.048 3 9h1.5V6.75q.046-.703.75-.75m14.25 9h-18v12q0 .657.422 1.078.421.422 1.078.422h15q.657 0 1.078-.422.422-.421.422-1.078zM18 10.5H3q-.656 0-1.078.422Q1.5 11.343 1.5 12v1.5h18V12q0-.656-.422-1.078Q18.657 10.5 18 10.5' />
    </g>
    <defs>
      <clipPath id='0e5a358fbe6833922cac738507ced1dc__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarXlRegularIcon);
export default ForwardRef;
