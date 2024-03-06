import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftXlBoldIcon = (
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
      <path d='m4.828 29.297-4.5-4.5q-.655-.797 0-1.594l4.5-4.5q.797-.655 1.594 0 .656.797 0 1.594l-2.578 2.578h16.031Q20.907 22.969 21 24q-.093 1.032-1.125 1.125H3.844l2.578 2.578q.656.797 0 1.594-.797.656-1.594 0m15.844-16.5-4.5 4.5q-.797.656-1.594 0-.655-.797 0-1.594l2.578-2.578H1.125Q.095 13.032 0 12q.095-1.03 1.125-1.125h16.031l-2.578-2.578q-.655-.797 0-1.594.797-.656 1.594 0l4.5 4.5q.656.797 0 1.594' />
    </g>
    <defs>
      <clipPath id='ecc910df7271fbde51c1ea47a72d5aff__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlBoldIcon);
export default ForwardRef;
