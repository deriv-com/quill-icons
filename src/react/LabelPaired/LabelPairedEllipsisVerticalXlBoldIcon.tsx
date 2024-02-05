import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={36}
    viewBox='0 0 6 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 23.25q1.266.046 1.969 1.125.563 1.125 0 2.25Q4.266 27.704 3 27.75q-1.266-.046-1.969-1.125-.562-1.125 0-2.25Q1.734 23.296 3 23.25m0-7.5q1.266.046 1.969 1.125.563 1.125 0 2.25Q4.266 20.204 3 20.25q-1.266-.046-1.969-1.125-.562-1.125 0-2.25Q1.734 15.797 3 15.75m2.25-5.25q-.046 1.266-1.125 1.969-1.125.562-2.25 0Q.797 11.766.75 10.5q.047-1.266 1.125-1.969 1.125-.562 2.25 0 1.079.703 1.125 1.969' />
    </g>
    <defs>
      <clipPath id='f07b0a0278f7aa76a6100dc361e1ad4a__a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlBoldIcon);
export default ForwardRef;
