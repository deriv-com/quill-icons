import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.219 9.5H7.78L5 6.719zm3.5-4.219 4 4q.437.5.219 1.094-.281.594-.938.625H1q-.656-.031-.937-.625-.219-.594.218-1.094l4-4Q4.594 5.001 5 5q.405 0 .719.281m-3.5 9.219L5 17.281 7.781 14.5zm3.5 4.219A1.04 1.04 0 0 1 5 19q-.405 0-.719-.281l-4-4q-.436-.5-.219-1.094Q.345 13.031 1 13h8q.656.031.938.625.218.594-.22 1.094z' />
    </g>
    <defs>
      <clipPath id='74104afbbdca2a1d35808f81098bdde7__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortMdBoldIcon);
export default ForwardRef;
