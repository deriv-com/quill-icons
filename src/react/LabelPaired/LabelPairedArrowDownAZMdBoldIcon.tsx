import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.469 15.781c-.313-.281-.313-.75 0-1.062.281-.281.75-.281 1.062 0l1.719 1.75V5.75A.74.74 0 0 1 5 5a.76.76 0 0 1 .75.75v10.719l1.719-1.719a.684.684 0 0 1 1.031 0 .684.684 0 0 1 0 1.031l-3 3a.684.684 0 0 1-1.031 0zM11 13h4c.281 0 .563.188.656.469a.67.67 0 0 1-.125.781l-2.875 3.25H15a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4c-.312 0-.594-.156-.687-.437a.67.67 0 0 1 .124-.782l2.876-3.281H11a.72.72 0 0 1-.75-.75A.74.74 0 0 1 11 13m2-8c.281 0 .531.188.656.438l2.5 5a.74.74 0 0 1-.343 1 .74.74 0 0 1-1-.344l-.438-.844h-2.812l-.407.844a.74.74 0 0 1-1 .344.74.74 0 0 1-.344-1l2.5-5A.77.77 0 0 1 13 5m-.687 3.75h1.343L13 7.438z' />
    </g>
    <defs>
      <clipPath id='19d5c17e0352d593632f9b8ec49fbd6a__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdBoldIcon);
export default ForwardRef;
