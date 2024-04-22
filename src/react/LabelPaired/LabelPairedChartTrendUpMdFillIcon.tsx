import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpMdFillIcon = (
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
      <path d='M19.438 4.125c.5.25.687.844.437 1.344l-3 6c-.156.344-.5.531-.875.531h-4.406l-3.719 7.469a.99.99 0 0 1-1.344.437l-6-3a.99.99 0 0 1-.437-1.343.99.99 0 0 1 1.344-.438l5.093 2.563 3.563-7.125A.97.97 0 0 1 11 10h4.375l2.719-5.437a.99.99 0 0 1 1.343-.438' />
    </g>
    <defs>
      <clipPath id='66021111ca9c6734967d34e29c8c68e0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpMdFillIcon);
export default ForwardRef;
