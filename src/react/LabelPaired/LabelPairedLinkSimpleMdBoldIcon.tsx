import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleMdBoldIcon = (
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
      <path d='M0 12q.062-2.125 1.469-3.531Q2.875 7.063 5 7h2.25q.687.063.75.75-.063.687-.75.75H5q-1.5.031-2.469 1.031Q1.531 10.5 1.5 12q.031 1.5 1.031 2.469.969 1 2.469 1.031h2.25q.687.063.75.75-.063.687-.75.75H5q-2.125-.062-3.531-1.469Q.063 14.126 0 12m18 0q-.062 2.125-1.469 3.531Q15.126 16.937 13 17h-2.25q-.687-.063-.75-.75.063-.687.75-.75H13q1.5-.031 2.469-1.031 1-.969 1.031-2.469-.031-1.5-1.031-2.469Q14.5 8.531 13 8.5h-2.25q-.687-.063-.75-.75.063-.687.75-.75H13q2.125.063 3.531 1.469T18 12m-12.25-.75h6.5q.687.063.75.75-.063.687-.75.75h-6.5Q5.063 12.687 5 12q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='0d7e175651edc403c4302f00ed4466d2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleMdBoldIcon);
export default ForwardRef;
