import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaSmBoldIcon = (
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
      <path d='M1.313 5.281v9.625c0 .383.273.656.656.656h11.375c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.969A1.96 1.96 0 0 1 0 14.906V5.281c0-.355.273-.656.656-.656.356 0 .657.3.657.656M7.82 9.93 6.125 8.234l-2.187 2.188v2.515h7.874v-2.132L10.419 9.19l-.766.739a1.287 1.287 0 0 1-1.832 0M8.75 9l.902-.902.164-.164a.885.885 0 0 1 1.286.054l1.695 1.969c.191.246.328.547.328.848v2.57c0 .492-.41.875-.875.875H3.5a.864.864 0 0 1-.875-.875v-2.953c0-.328.137-.684.383-.93l2.488-2.488a.89.89 0 0 1 1.23 0L7.82 8.098z' />
    </g>
    <defs>
      <clipPath id='588e879246173938a9a418d3196f54a9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmBoldIcon);
export default ForwardRef;
