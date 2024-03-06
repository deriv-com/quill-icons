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
      <path d='M0 4.625q.023-.352.375-.375.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375zm1.5 0q.023-.352.375-.375.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375zm1.875-.375q.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375v-9.75q.023-.352.375-.375m1.875.375q.023-.352.375-.375.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375zm1.875-.375q.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375v-9.75q.023-.352.375-.375M9 4.625q.023-.352.375-.375.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375zm2.625-.375q.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375v-9.75q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='9b68baad9e493e7fb0ea3dd30cb83e08__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionRegularIcon);
export default ForwardRef;
