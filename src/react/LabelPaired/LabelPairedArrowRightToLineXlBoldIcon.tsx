import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineXlBoldIcon = (
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
      <path d='M21 10.125v15.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-15.75q.094-1.03 1.125-1.125 1.032.095 1.125 1.125m-6.375 8.719.047-.047-6.375 6q-.844.656-1.594-.047-.656-.797.047-1.547l4.313-4.078H1.124Q.095 19.032 0 18q.095-1.03 1.125-1.125h9.938L6.75 12.797q-.703-.75-.047-1.547.75-.703 1.547-.047l6.375 6Q15 17.532 15 18q0 .47-.375.844' />
    </g>
    <defs>
      <clipPath id='37f8020c52a9eae3__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlBoldIcon);
export default ForwardRef;
