import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.375 9.5q-.024.633-.562.984-.563.282-1.126 0a1.17 1.17 0 0 1-.562-.984q.024-.633.563-.984.562-.282 1.124 0 .54.351.563.984m-3.75 0q-.024.633-.562.984-.562.282-1.125 0a1.17 1.17 0 0 1-.563-.984q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984M1.75 10.625a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562.633.024.984.563.282.562 0 1.124-.351.54-.984.563' />
    </g>
    <defs>
      <clipPath id='903505f323bf58d1fb77f0d3b8f3b38c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionBoldIcon);
export default ForwardRef;
