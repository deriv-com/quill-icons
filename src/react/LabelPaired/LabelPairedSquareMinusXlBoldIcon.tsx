import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareMinusXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75zm-3 .75c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm7.125 6.375h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75C6.469 19.125 6 18.656 6 18c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='8fb965d7cbe96515633b8a58646c2d2d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusXlBoldIcon);
export default ForwardRef;
