import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterSmFillIcon = (
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
      <path d='M.375 6.375c0-.465.383-.875.875-.875h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1.25a.864.864 0 0 1-.875-.875m1.75 4.375c0-.465.383-.875.875-.875h7a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3a.864.864 0 0 1-.875-.875m6.125 4.375c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='bed0326dc00b31cb824c73ccb4b7c194__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmFillIcon);
export default ForwardRef;
