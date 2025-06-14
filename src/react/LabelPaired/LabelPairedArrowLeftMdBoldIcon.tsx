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
      <path d='M.219 12.563A.75.75 0 0 1 0 12c0-.187.063-.375.219-.531l5.5-5.25c.312-.282.781-.282 1.062.031a.746.746 0 0 1-.031 1.063L2.594 11.25H13.25A.76.76 0 0 1 14 12a.74.74 0 0 1-.75.75H2.594l4.156 3.969c.313.281.313.75.031 1.062-.281.313-.75.313-1.062.032z' />
    </g>
    <defs>
      <clipPath id='55d65a411cc89dd6ab68cb2842babd89__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdBoldIcon);
export default ForwardRef;
