import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 10.75c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875m4.648 0a.9.9 0 0 1 .875-.875h1.75c.493 0 .875.41.875.875a.864.864 0 0 1-.875.875h-1.75a.88.88 0 0 1-.875-.875m4.676 0c0-.465.383-.875.875-.875h1.75c.492 0 .875.41.875.875a.864.864 0 0 1-.875.875h-1.75a.864.864 0 0 1-.875-.875m4.676 0c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='9177d7f4c1d3224ab977bb15ff5af024__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedSmFillIcon);
export default ForwardRef;
