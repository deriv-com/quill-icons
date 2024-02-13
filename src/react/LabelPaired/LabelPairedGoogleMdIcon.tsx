import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.625 12.188q-.063 3.375-2.062 5.437-2.032 2.062-5.438 2.125-2.156-.03-3.906-1.062a7.74 7.74 0 0 1-2.782-2.782Q.408 14.156.375 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.97 4.28 8.126 4.25q3.156.063 5.188 2.031l-2.094 2.032Q9.749 7 7.938 7.125 6.125 7.218 4.75 8.5 3.406 9.813 3.313 12q.062 2.094 1.406 3.469 1.374 1.375 3.406 1.437 1.53-.03 2.469-.625.938-.593 1.406-1.343.438-.782.531-1.376H8.125v-2.687H15.5q.125.563.125 1.313' />
    </g>
    <defs>
      <clipPath id='7f7f81fdaae4dacaeb6c90246312f246__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleMdIcon);
export default ForwardRef;
