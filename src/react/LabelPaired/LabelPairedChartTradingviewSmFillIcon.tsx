import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewSmFillIcon = (
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
      <path d='M14.852 9.273a.843.843 0 0 1 0 1.23l-4.075 4.075a1.32 1.32 0 0 1-1.832 0l-.82-.82-1.148 1.12a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L7.194 12.2c.492-.52 1.34-.52 1.832 0l.848.82 3.746-3.746a.843.843 0 0 1 1.23 0M10.395 6.13c0 .328-.301.601-.63.601-.355 0-.656-.273-.656-.601s.301-.602.657-.602c.328 0 .629.274.629.602m.492-.629h.957L10.559 9h-.957zm-4.293 0h2.215V9H7.96V6.293H6.594zM3.75 3.75a.9.9 0 0 1 .875.875v11.129c0 .137.11.246.273.246h9.79a.9.9 0 0 1 .874.875c0 .492-.41.875-.874.875H4.242c-.793 0-1.367-.574-1.367-1.367V4.625c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='7bb1a2c965c3ee70f34ad7403bd078b5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewSmFillIcon);
export default ForwardRef;
