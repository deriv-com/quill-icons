import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.906 5.125 5.344 10h7.281l-2.562-4.875a.793.793 0 0 1 .312-1.031.793.793 0 0 1 1.031.312L14.312 10H17c.531 0 1 .469 1 1 0 .563-.469 1-1 1l-1.625 6.5a2.01 2.01 0 0 1-1.937 1.5H4.563a2.044 2.044 0 0 1-1.97-1.5L1 12c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2.656l2.907-5.594a.793.793 0 0 1 1.03-.312c.345.187.5.656.313 1.031M6 13.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5.25 0 .5-.219.5-.5zm3-.5c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-3c0-.25-.25-.5-.5-.5m4 .5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5.25 0 .5-.219.5-.5z' />
    </g>
    <defs>
      <clipPath id='156df6e77aabacab8717d577286e4f2a__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingMdFillIcon);
export default ForwardRef;
