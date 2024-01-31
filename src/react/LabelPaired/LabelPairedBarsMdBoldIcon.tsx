import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsMdBoldIcon = (
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
      <path d='M0 6.75Q.063 6.063.75 6h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 7.437 0 6.75m0 5q.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75H.75q-.687-.063-.75-.75m14 5q-.063.687-.75.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='533b214eb48bdc88__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsMdBoldIcon);
export default ForwardRef;
