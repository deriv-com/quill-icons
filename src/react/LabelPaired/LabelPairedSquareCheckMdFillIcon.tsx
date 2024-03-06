import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckMdFillIcon = (
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
      <path d='M2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5m8.531 5.531q.438-.531 0-1.062-.531-.438-1.062 0L6 12.938l-1.469-1.47q-.531-.435-1.062 0-.438.533 0 1.063l2 2q.531.438 1.062 0z' />
    </g>
    <defs>
      <clipPath id='ae6bc82b7dac3da0b2c8f08adcd5a9d3__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckMdFillIcon);
export default ForwardRef;
