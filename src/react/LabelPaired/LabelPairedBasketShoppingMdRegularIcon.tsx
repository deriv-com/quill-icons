import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingMdRegularIcon = (
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
      <path d='M10.219 4.094a.494.494 0 0 1 .687.156L14.281 10H17.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.75l-1.875 7.5a2.01 2.01 0 0 1-1.937 1.5H5.062a2.044 2.044 0 0 1-1.968-1.5L1.25 11H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3.187l3.376-5.75a.494.494 0 0 1 .687-.156.494.494 0 0 1 .156.687L4.844 10h8.281l-3.062-5.219a.494.494 0 0 1 .156-.687M2.28 11l1.813 7.25c.093.438.5.75.968.75h7.876c.437 0 .843-.312.968-.75L15.72 11zM7 13.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5m2-.5c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5m3 .5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='eda54f5e7bd041491c9996bb60ba6ac2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingMdRegularIcon);
export default ForwardRef;
