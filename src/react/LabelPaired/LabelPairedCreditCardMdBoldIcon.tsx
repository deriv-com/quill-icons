import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardMdBoldIcon = (
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
      <path d='M16 6.5H2q-.469.031-.5.5v1h15V7q-.03-.469-.5-.5m.5 4.5h-15v6q.031.47.5.5h14q.47-.03.5-.5zM2 5h14q.844.03 1.406.594Q17.97 6.156 18 7v10q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5m1.75 9.5h1.5q.687.063.75.75-.063.687-.75.75h-1.5q-.687-.063-.75-.75.063-.687.75-.75m4 0h3.5q.687.063.75.75-.063.687-.75.75h-3.5q-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='67b4b176ca9b609b2ae497e4df3af005__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardMdBoldIcon);
export default ForwardRef;
