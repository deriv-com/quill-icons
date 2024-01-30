import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftMdBoldIcon = (
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
      <path d='m3.219 19.531-3-3q-.438-.531 0-1.062l3-3q.531-.438 1.062 0 .438.531 0 1.062L2.563 15.25H13.25q.687.063.75.75-.063.687-.75.75H2.563l1.718 1.719q.438.531 0 1.062-.531.438-1.062 0m10.562-11-3 3q-.531.438-1.062 0-.438-.531 0-1.062l1.719-1.719H.75Q.063 8.687 0 8q.063-.687.75-.75h10.688l-1.72-1.719q-.435-.531 0-1.062.533-.438 1.063 0l3 3q.438.531 0 1.062' />
    </g>
    <defs>
      <clipPath id='77cf76cd9e098fab33d7d5a762b0e599__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdBoldIcon);
export default ForwardRef;
