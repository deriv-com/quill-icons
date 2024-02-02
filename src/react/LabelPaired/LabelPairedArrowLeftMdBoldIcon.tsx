import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.219 12.531A.72.72 0 0 1 0 12q0-.312.219-.531l5.5-5.25q.563-.438 1.062 0 .438.563-.031 1.062L2.625 11.25H13.25q.687.063.75.75-.063.687-.75.75H2.625l4.156 3.969q.438.5 0 1.062-.5.438-1.031 0l-5.5-5.25z' />
    </g>
    <defs>
      <clipPath id='1c1ef9745580138d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdBoldIcon);
export default ForwardRef;
