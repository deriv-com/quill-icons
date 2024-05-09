import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsSmFillIcon = (
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
      <path d='M.375 6.375c0-.465.383-.875.875-.875h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1.25a.864.864 0 0 1-.875-.875m0 4.375c0-.465.383-.875.875-.875h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1.25a.864.864 0 0 1-.875-.875m12.25 4.375c0 .492-.41.875-.875.875H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h10.5a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='994b2de611612455afc6dcd007b64f37__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsSmFillIcon);
export default ForwardRef;
