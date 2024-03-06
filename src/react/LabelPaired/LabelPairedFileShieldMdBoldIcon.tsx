import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldMdBoldIcon = (
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
      <path d='M2 18.5h7.719q.5.687 1.219 1.25Q10.53 20 10 20H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844v1.625l-1.5.594V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5m11.219-7.437a.66.66 0 0 1 .562 0l3.75 1.5q.438.187.469.687.03 1.031-.344 2.313-.344 1.281-1.25 2.468-.937 1.188-2.625 1.907a.66.66 0 0 1-.562 0q-1.688-.72-2.625-1.907-.906-1.187-1.25-2.468Q8.969 14.28 9 13.25q.03-.5.469-.687zm3.25 2.687L13.5 12.563v5.874q1.563-.843 2.25-2.156.656-1.281.719-2.531' />
    </g>
    <defs>
      <clipPath id='345c885525c01e9487c7199aa52a1cda__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldMdBoldIcon);
export default ForwardRef;
