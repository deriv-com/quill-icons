import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterMdBoldIcon = (
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
      <path d='M0 6.75Q.063 6.063.75 6h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 7.437 0 6.75m2 5q.063-.687.75-.75h8.5q.687.063.75.75-.063.687-.75.75h-8.5q-.687-.063-.75-.75m7 5q-.063.687-.75.75h-2.5q-.687-.063-.75-.75.063-.687.75-.75h2.5q.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='6e4523abb43f6a13498ac16e59d624ab__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdBoldIcon);
export default ForwardRef;
