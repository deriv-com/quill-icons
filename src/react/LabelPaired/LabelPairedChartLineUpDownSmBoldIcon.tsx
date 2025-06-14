import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownSmBoldIcon = (
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
      <path d='M.656 4.625c.356 0 .657.3.657.656v9.625c0 .383.273.656.656.656h11.375c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.969A1.96 1.96 0 0 1 0 14.906V5.281c0-.355.273-.656.656-.656m9.625 2.188a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h2.188c.164 0 .328.082.465.191.109.137.191.301.191.465v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.602L8.34 11.215c-.274.273-.684.273-.93 0L5.687 9.492l-1.722 1.723c-.274.273-.684.273-.93 0a.6.6 0 0 1 0-.902l2.188-2.188c.246-.273.656-.273.93 0l1.722 1.723 3.008-3.036zm0 7.437a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h.602l-1.285-1.286.93-.93 1.284 1.286v-.602c0-.355.274-.656.657-.656.355 0 .656.3.656.656v2.188a.66.66 0 0 1-.191.465.64.64 0 0 1-.465.191z' />
    </g>
    <defs>
      <clipPath id='a0112e3e5a73ceab88c04f71faa93d2a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmBoldIcon);
export default ForwardRef;
