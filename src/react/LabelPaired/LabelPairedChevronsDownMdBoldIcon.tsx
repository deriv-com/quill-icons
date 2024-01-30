import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownMdBoldIcon = (
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
      <path d='m7.469 18.531-6-6q-.438-.531 0-1.062.531-.438 1.062 0L8 16.938l5.469-5.47q.531-.435 1.062 0 .438.533 0 1.063l-6 6q-.531.438-1.062 0m-6-12Q1.03 6 1.469 5.47q.531-.438 1.062 0L8 10.938l5.469-5.47q.531-.435 1.062 0 .438.533 0 1.063l-6 6q-.531.438-1.062 0z' />
    </g>
    <defs>
      <clipPath id='f08fc5f56a924084decb917c110276f9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownMdBoldIcon);
export default ForwardRef;
