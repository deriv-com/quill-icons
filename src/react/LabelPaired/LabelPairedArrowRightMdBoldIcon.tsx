import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightMdBoldIcon = (
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
      <path d='m13.75 12.563-5.5 5.25c-.312.28-.781.28-1.062-.032s-.282-.781.03-1.062l4.157-3.969H.75A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h10.625L7.219 7.313a.746.746 0 0 1-.032-1.063.746.746 0 0 1 1.063-.031l5.5 5.25c.156.156.25.344.25.531a.78.78 0 0 1-.25.563' />
    </g>
    <defs>
      <clipPath id='321c7242358140a52d02c7d4d1bb12cf__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdBoldIcon);
export default ForwardRef;
