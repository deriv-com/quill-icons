import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftXlBoldIcon = (
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
      <path d='M.328 18.797A1.09 1.09 0 0 1 0 18q0-.468.328-.797l8.25-7.875q.844-.655 1.594 0 .656.844-.047 1.594l-6.187 5.953h15.937Q20.907 16.969 21 18q-.093 1.032-1.125 1.125H3.938l6.234 5.953q.656.75 0 1.594-.75.656-1.547 0l-8.25-7.875z' />
    </g>
    <defs>
      <clipPath id='acb251531a846851ab819612dfc61abf__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlBoldIcon);
export default ForwardRef;
