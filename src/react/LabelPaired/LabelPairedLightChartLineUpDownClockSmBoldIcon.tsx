import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockSmBoldIcon = (
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
      <path d='M.25 5.281c0-.355.273-.656.656-.656.356 0 .657.3.657.656v9.625c0 .383.273.656.656.656h7.11c.163.493.437.93.765 1.313H2.219A1.96 1.96 0 0 1 .25 14.906zm3.035 5.032 2.188-2.188c.246-.273.656-.273.93 0l1.722 1.723c.984-1.012 1.996-2.024 3.008-3.036h-.602a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h2.188c.164 0 .328.082.465.191.109.137.191.301.191.465v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.602L8.59 11.215c-.274.273-.684.273-.93 0L5.937 9.492l-1.722 1.723c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902m6.59 3.5c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m3.5-1.75v1.75c0 .246.191.437.438.437h1.312a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.438h-.875v-1.312a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438' />
    </g>
    <defs>
      <clipPath id='47a3e2d4041fee66ca4a1ecd2a944557__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockSmBoldIcon);
export default ForwardRef;
