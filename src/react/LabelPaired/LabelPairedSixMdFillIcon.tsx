import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixMdFillIcon = (
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
      <path d='m7.25 6.656-2 2.375C7.875 9.156 10 11.344 10 14c0 2.781-2.25 5-5 5-2.781 0-5-2.219-5-5v-.125c.031-1.156.438-2.281 1.188-3.156l4.53-5.344c.345-.437 1-.469 1.407-.125.438.344.469 1 .125 1.406M8 14c0-1.062-.594-2.031-1.5-2.594-.937-.531-2.094-.531-3 0C2.563 11.97 2 12.937 2 14a3.03 3.03 0 0 0 1.5 2.625c.906.531 2.063.531 3 0C7.406 16.063 8 15.094 8 14' />
    </g>
    <defs>
      <clipPath id='b435682f11abee74fa626f03bf8c3fd2__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixMdFillIcon);
export default ForwardRef;
