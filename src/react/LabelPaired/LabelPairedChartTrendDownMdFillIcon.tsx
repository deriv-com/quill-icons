import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.531 4.125a.99.99 0 0 1 1.344.438L11.594 12H16c.375 0 .719.219.875.563l3 6a.99.99 0 0 1-.437 1.343.99.99 0 0 1-1.344-.437L15.375 14H11c-.406 0-.75-.187-.906-.531L6.53 6.344 1.438 8.906A.99.99 0 0 1 .093 8.47.99.99 0 0 1 .53 7.125z' />
    </g>
    <defs>
      <clipPath id='49aaff73e89b687dab8a0e4db9690196__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownMdFillIcon);
export default ForwardRef;
