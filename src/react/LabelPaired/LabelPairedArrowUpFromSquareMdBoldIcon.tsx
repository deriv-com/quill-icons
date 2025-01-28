import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.531 4.219 12 7.719c.313.312.313.781 0 1.062-.281.313-.75.313-1.062 0l-2.22-2.219v7.688c0 .438-.312.75-.75.75a.74.74 0 0 1-.75-.75V6.563L5 8.78a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l3.5-3.5c.281-.282.75-.282 1.062 0M2.25 5h.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.25a.74.74 0 0 0-.75.75v10.5c0 .438.313.75.75.75h11.5a.74.74 0 0 0 .75-.75V7.25a.76.76 0 0 0-.75-.75h-.25a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.25C14.969 5 16 6.031 16 7.25v10.5A2.26 2.26 0 0 1 13.75 20H2.25C1 20 0 19 0 17.75V7.25C0 6.031 1 5 2.25 5' />
    </g>
    <defs>
      <clipPath id='9932b8e61a69dcb2631e1fc63000116f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdBoldIcon);
export default ForwardRef;
