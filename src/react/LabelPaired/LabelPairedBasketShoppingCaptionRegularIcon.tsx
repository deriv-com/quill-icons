import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingCaptionRegularIcon = (
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
      <path d='M7.914 3.57a.37.37 0 0 1 .516.118L10.96 8h2.415c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.562l-1.407 5.625A1.505 1.505 0 0 1 9.953 15.5H4.047c-.703 0-1.29-.469-1.477-1.125L1.188 8.75H.625a.37.37 0 0 1-.375-.375C.25 8.188.414 8 .625 8h2.391l2.53-4.312a.37.37 0 0 1 .516-.118.37.37 0 0 1 .118.516L3.883 8h6.21L7.798 4.086a.37.37 0 0 1 .117-.516M1.961 8.75l1.36 5.438c.07.328.374.562.726.562h5.906a.77.77 0 0 0 .727-.562l1.36-5.438zM5.5 10.625v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375M7 10.25c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375m2.25.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='26cc1058d7b6983f4fd047e14a5be35f__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingCaptionRegularIcon);
export default ForwardRef;
