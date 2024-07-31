import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownMdBoldIcon = (
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
      <path d='m16.531 15.781-3 3c-.312.313-.781.313-1.062 0l-3-3a.684.684 0 0 1 0-1.031c.281-.312.75-.312 1.062 0l1.719 1.719V5.75A.74.74 0 0 1 13 5a.76.76 0 0 1 .75.75v10.719l1.719-1.719c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031m-11-10.562 2.969 3c.313.312.313.781 0 1.062-.281.313-.75.313-1.062 0l-1.72-1.719V18.25c0 .438-.312.75-.75.75a.74.74 0 0 1-.75-.75V7.563L2.5 9.28a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l3-3c.281-.282.75-.282 1.062 0' />
    </g>
    <defs>
      <clipPath id='084ef488b3f7d27c6994825d0ec2d799__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdBoldIcon);
export default ForwardRef;
