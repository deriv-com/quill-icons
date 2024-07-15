import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 4.625h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H2.188a.45.45 0 0 0-.438.438c0 .246.191.437.438.437H12.25c.957 0 1.75.793 1.75 1.75v6.125c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m9.625 6.563a.88.88 0 0 0-.875.874c0 .493.383.876.875.876a.88.88 0 0 0 .875-.876.9.9 0 0 0-.875-.874' />
    </g>
    <defs>
      <clipPath id='20173ed903a7ec426b7c0afb917a6436__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmFillIcon);
export default ForwardRef;
