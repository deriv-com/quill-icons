import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankMdBoldIcon = (
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
      <path d='M8.375 4.094 15.438 8q.53.312.562.938 0 .437-.312.75a1.02 1.02 0 0 1-.75.312H1.063q-.438 0-.75-.312A1.02 1.02 0 0 1 0 8.938Q.03 8.312.563 8l7.062-3.906q.375-.187.75 0M7.125 8.5A1 1 0 0 1 7 8q0-.437.281-.719A.97.97 0 0 1 8 7q.438 0 .719.281A.97.97 0 0 1 9 8a1 1 0 0 1-.125.5h4.375L8 5.594 2.75 8.5zM2 11h1.5v5h2v-5H7v5h2v-5h1.5v5h2v-5H14v5h.25q.687.063.75.75-.063.687-.75.75H2q-.687-.063-.75-.75.063-.687.75-.75zm-1 7.5h14.25q.687.063.75.75-.063.687-.75.75H1q-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='c4b03992ca93ae9bcf9404b1fe618b40__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankMdBoldIcon);
export default ForwardRef;
