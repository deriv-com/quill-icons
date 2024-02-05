import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignMdBoldIcon = (
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
      <path d='M1.531 11.5H.75q-.687-.063-.75-.75.063-.687.75-.75h1.031q.688-2.22 2.5-3.594T8.5 5h.75q.687.063.75.75-.063.687-.75.75H8.5q-1.782.03-3.125.969a5.56 5.56 0 0 0-2 2.531H8.25q.687.063.75.75-.063.687-.75.75H3.031a4 4 0 0 0 0 1H8.25q.687.063.75.75-.063.687-.75.75H3.375a5.56 5.56 0 0 0 2 2.531q1.344.938 3.125.969h.75q.687.063.75.75-.063.687-.75.75H8.5q-2.406-.031-4.219-1.406Q2.47 16.218 1.781 14H.75q-.687-.063-.75-.75.063-.687.75-.75h.781a4 4 0 0 1 0-1' />
    </g>
    <defs>
      <clipPath id='5d61541696e23f9e00803bcd4b745e5e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignMdBoldIcon);
export default ForwardRef;
