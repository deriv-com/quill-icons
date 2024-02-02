import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixMdRegularIcon = (
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
      <path d='M9 14q-.03-1.687-1.156-2.844Q6.688 10.031 5 10q-1.687.03-2.781 1.156Q1.094 12.251 1 13.906V14q.03 1.688 1.156 2.844Q3.312 17.969 5 18q1.688-.03 2.844-1.156Q8.969 15.688 9 14M3.969 9.125A4.2 4.2 0 0 1 5 9q2.125.063 3.531 1.469Q9.937 11.874 10 14q-.062 2.126-1.469 3.531Q7.126 18.937 5 19q-2.125-.062-3.531-1.469Q.063 16.125 0 14v-.187a5.16 5.16 0 0 1 1.281-3.188l4.844-5.469q.345-.312.719-.031.312.345.031.719z' />
    </g>
    <defs>
      <clipPath id='9aa994144207d0dfe2ee50b134db9f80__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixMdRegularIcon);
export default ForwardRef;
