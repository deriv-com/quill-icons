import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.18 4.344 4.258 8h5.46L7.798 4.344a.595.595 0 0 1 .234-.774.595.595 0 0 1 .774.235L10.985 8H13c.398 0 .75.352.75.75 0 .422-.352.75-.75.75l-1.219 4.875a1.505 1.505 0 0 1-1.453 1.125H3.672c-.703 0-1.29-.469-1.477-1.125L1 9.5a.74.74 0 0 1-.75-.75C.25 8.352.578 8 1 8h1.992l2.18-4.195a.595.595 0 0 1 .773-.235c.258.14.375.493.235.774m-1.43 6.281a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375zM7 10.25a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-2.25A.4.4 0 0 0 7 10.25m3 .375a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375z' />
    </g>
    <defs>
      <clipPath id='8717bb602ebd258bdea1326a9cbcad72__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingCaptionFillIcon);
export default ForwardRef;
