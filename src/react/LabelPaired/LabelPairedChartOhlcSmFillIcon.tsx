import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcSmFillIcon = (
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
      <path d='M9 3.75a.9.9 0 0 1 .875.875V5.5h.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.875v7.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.875H7.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.875V4.625c0-.465.383-.875.875-.875M3.313 9a.9.9 0 0 1 .874.875v4.375h.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.875v.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.874-.875V12.5h-.876a.864.864 0 0 1-.874-.875c0-.465.382-.875.875-.875h.875v-.875c0-.465.382-.875.874-.875m11.375-3.5a.9.9 0 0 1 .874.875v4.375h.876a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.875v.875c0 .492-.41.875-.876.875a.864.864 0 0 1-.874-.875V9h-.876a.864.864 0 0 1-.874-.875c0-.465.382-.875.874-.875h.876v-.875c0-.465.382-.875.874-.875' />
    </g>
    <defs>
      <clipPath id='655122cebbb9de15be001ec4d6c15261__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcSmFillIcon);
export default ForwardRef;
