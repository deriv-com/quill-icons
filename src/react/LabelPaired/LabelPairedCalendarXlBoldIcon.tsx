import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarXlBoldIcon = (
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
      <path d='M7.125 7.125V9h6.75V7.125Q13.97 6.095 15 6q1.032.095 1.125 1.125V9H18q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V12q.047-1.266.89-2.11Q1.735 9.048 3 9h1.875V7.125Q4.97 6.095 6 6q1.032.095 1.125 1.125M2.25 15v12q.046.704.75.75h15q.704-.046.75-.75V15z' />
    </g>
    <defs>
      <clipPath id='008d1cc6364157a78cbc9bde70a494e0__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarXlBoldIcon);
export default ForwardRef;
