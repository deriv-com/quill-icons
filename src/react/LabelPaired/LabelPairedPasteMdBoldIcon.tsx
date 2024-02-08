import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteMdBoldIcon = (
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
      <path d='M2.5 7H2q-.469.031-.5.5V16q.031.47.5.5h3V18H2q-.843-.03-1.406-.594Q.032 16.844 0 16V7.5q.03-.843.594-1.406Q1.157 5.532 2 5.5h1.281q.094-.656.563-1.062Q4.313 4 5 4q.688 0 1.156.438.469.406.563 1.062H8q.72 0 1.25.438.5.406.688 1.062H8q-.844 0-1.531.406-.657.407-1.063 1.094H3.5a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2.5 7.5zm2-1.25q.031.47.5.5.47-.03.5-.5-.03-.469-.5-.5-.469.031-.5.5M8 18.5h6q.47-.03.5-.5v-6H13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 12 11V9.5H8q-.469.031-.5.5v8q.031.47.5.5m6 1.5H8q-.843-.03-1.406-.594Q6.032 18.844 6 18v-8q.03-.843.594-1.406Q7.156 8.032 8 8h4.875q.624 0 1.063.438l1.624 1.624Q16 10.5 16 11.126V18q-.03.844-.594 1.406-.563.563-1.406.594' />
    </g>
    <defs>
      <clipPath id='e79c01b40c1c698e0093d126d895cff4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdBoldIcon);
export default ForwardRef;
