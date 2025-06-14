import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingMdBoldIcon = (
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
      <path d='M7.594 4.094c.343.187.5.656.312 1.031L5.344 10h7.281l-2.562-4.875a.793.793 0 0 1 .312-1.031.793.793 0 0 1 1.031.312L14.312 10h2.938a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.625l-1.75 7a2.01 2.01 0 0 1-1.937 1.5H5.062a2.044 2.044 0 0 1-1.968-1.5l-1.719-7H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.906l2.907-5.594a.793.793 0 0 1 1.03-.312M2.906 11.5l1.656 6.625c.063.219.25.375.5.375h7.876a.5.5 0 0 0 .468-.375l1.656-6.625zM7 13.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75M9 13a.76.76 0 0 1 .75.75v2.5A.74.74 0 0 1 9 17a.72.72 0 0 1-.75-.75v-2.5A.74.74 0 0 1 9 13m3.5.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='2d5e1dff58a74929987aaae2bd383aef__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingMdBoldIcon);
export default ForwardRef;
