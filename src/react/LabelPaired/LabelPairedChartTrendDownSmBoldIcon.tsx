import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownSmBoldIcon = (
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
      <path d='M17.148 17.477a.647.647 0 0 1-.875-.301L13.84 12.28H9.875a.65.65 0 0 1-.602-.355L6.074 5.527 1.398 7.852a.647.647 0 0 1-.875-.301.647.647 0 0 1 .301-.875l5.25-2.625a.647.647 0 0 1 .875.3l3.309 6.618h3.965c.273 0 .492.164.601.383l2.625 5.25a.647.647 0 0 1-.3.875' />
    </g>
    <defs>
      <clipPath id='cc97b3e8e53de55b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownSmBoldIcon);
export default ForwardRef;
