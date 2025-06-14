import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375A.37.37 0 0 1 0 14.375zm1.5 0c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375zm1.875-.375c.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375A.37.37 0 0 1 3 14.375v-9.75c0-.187.164-.375.375-.375m1.875.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375zm1.875-.375c.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-9.75c0-.187.164-.375.375-.375M9 4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375A.37.37 0 0 1 9 14.375zm2.625-.375c.188 0 .375.188.375.375v9.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-9.75c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='fba52d89592a3ec0a1042dd828c0eff7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionRegularIcon);
export default ForwardRef;
