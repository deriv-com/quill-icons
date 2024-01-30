import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisXlBoldIcon = (
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
      <path d='M20.25 18q-.046 1.266-1.125 1.969-1.125.563-2.25 0-1.078-.703-1.125-1.969.046-1.266 1.125-1.969 1.125-.562 2.25 0 1.079.703 1.125 1.969m-7.5 0q-.047 1.266-1.125 1.969-1.125.563-2.25 0Q8.297 19.266 8.25 18q.047-1.266 1.125-1.969 1.125-.562 2.25 0 1.078.703 1.125 1.969M3 20.25q-1.266-.046-1.969-1.125-.562-1.125 0-2.25Q1.734 15.797 3 15.75q1.266.046 1.969 1.125.563 1.125 0 2.25Q4.266 20.204 3 20.25' />
    </g>
    <defs>
      <clipPath id='14f5ee1e634bb009ac64706eacaceb63__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlBoldIcon);
export default ForwardRef;
