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
      <path d='m16.531 15.781-3 3q-.531.438-1.062 0l-3-3q-.438-.531 0-1.062.531-.438 1.062 0l1.719 1.719V5.75q.063-.687.75-.75.687.063.75.75v10.688l1.719-1.72q.531-.435 1.062 0 .438.533 0 1.063m-11-10.562 3 3q.438.531 0 1.062-.531.438-1.062 0L5.75 7.562V18.25q-.063.687-.75.75-.687-.063-.75-.75V7.563L2.531 9.28q-.531.438-1.062 0-.438-.531 0-1.062l3-3q.531-.438 1.062 0' />
    </g>
    <defs>
      <clipPath id='2dd29cb3bdfdbcb49053ec063cd77b00__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdBoldIcon);
export default ForwardRef;
