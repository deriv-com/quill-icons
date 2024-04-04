import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7-4.156a.47.47 0 0 0-.41.246l-.985 2.023-2.214.328c-.164 0-.301.137-.356.274a.47.47 0 0 0 .11.465l1.613 1.558-.383 2.215c-.027.164.027.328.164.41.137.11.328.11.465.055L7 13.128l1.969 1.04a.48.48 0 0 0 .465-.055c.136-.082.191-.246.164-.41l-.356-2.215 1.586-1.558c.137-.11.164-.301.11-.438a.45.45 0 0 0-.356-.3l-2.215-.329-.984-2.023A.44.44 0 0 0 7 6.62z' />
    </g>
    <defs>
      <clipPath id='928c753b7248e20e0b56df8b12811f1f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmFillIcon);
export default ForwardRef;
