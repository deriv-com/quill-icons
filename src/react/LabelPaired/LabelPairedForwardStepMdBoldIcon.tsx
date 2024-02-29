import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepMdBoldIcon = (
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
      <path d='M7.5 6.75q.063-.687.75-.75.687.063.75.75v10.5q-.063.687-.75.75-.687-.063-.75-.75v-3.281l-5.531 3.875a1 1 0 0 1-.532.156.84.84 0 0 1-.656-.281.84.84 0 0 1-.281-.657V6.938q0-.406.281-.656A.84.84 0 0 1 1.438 6a.9.9 0 0 1 .53.156L7.5 10.031zm0 5.375v-.25L2 8.031V16z' />
    </g>
    <defs>
      <clipPath id='0c833993136b65b7bb481bb6cb3bbd6d__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdBoldIcon);
export default ForwardRef;
