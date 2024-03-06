import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpSmBoldIcon = (
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
      <path d='M17.148 4.05a.647.647 0 0 1 .301.876l-2.625 5.25a.65.65 0 0 1-.601.355h-3.965l-3.309 6.645a.647.647 0 0 1-.875.3l-5.25-2.624a.647.647 0 0 1-.3-.875.647.647 0 0 1 .874-.301L6.074 16l3.2-6.398a.67.67 0 0 1 .601-.383h3.965l2.433-4.867a.647.647 0 0 1 .875-.301' />
    </g>
    <defs>
      <clipPath id='0b080161fcc1741e2b152fb4248a99c9__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpSmBoldIcon);
export default ForwardRef;
