import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationMdFillIcon = (
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
      <path d='M8 5c.438 0 .844.25 1.063.625l6.75 11.5c.218.406.218.875 0 1.25A1.19 1.19 0 0 1 14.75 19H1.25c-.469 0-.875-.219-1.094-.625a1.27 1.27 0 0 1 0-1.25l6.75-11.5A1.26 1.26 0 0 1 8 5m0 4a.74.74 0 0 0-.75.75v3.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-3.5A.76.76 0 0 0 8 9m1 7c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1' />
    </g>
    <defs>
      <clipPath id='ffcd9d8d0b8eb4a93b19e36bb8c5238c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdFillIcon);
export default ForwardRef;
