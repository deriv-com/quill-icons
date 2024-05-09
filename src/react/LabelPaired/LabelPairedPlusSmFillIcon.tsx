import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.375 5.938v3.937h3.938a.9.9 0 0 1 .874.875c0 .492-.41.875-.874.875H7.374v3.938c0 .492-.41.874-.875.874a.864.864 0 0 1-.875-.875v-3.937H1.688a.864.864 0 0 1-.875-.875c0-.465.382-.875.875-.875h3.937V5.938c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='6f26d0b559c58a6d1a3c4c6249366bd3__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmFillIcon);
export default ForwardRef;
