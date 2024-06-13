import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaSmFillIcon = (
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
      <path d='M1.75 5.5v9.188c0 .246.191.437.438.437h10.937A.9.9 0 0 1 14 16c0 .492-.41.875-.875.875H2.188A2.16 2.16 0 0 1 0 14.688V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m2.625 7.875v.027a.88.88 0 0 1-.875-.875v-2.296c0-.22.055-.438.191-.602L5.88 7.168a.883.883 0 0 1 1.34 0l1.066 1.285a.64.64 0 0 0 .957.055l.574-.574c.356-.356.957-.356 1.286.054l1.804 2.078a.94.94 0 0 1 .219.575V12.5c0 .492-.41.875-.875.875z' />
    </g>
    <defs>
      <clipPath id='924b876888048aa8bac1e4bf7bf18d03__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmFillIcon);
export default ForwardRef;
