import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpSmRegularIcon = (
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
      <path d='M17.066 4.242c.22.11.301.383.192.602l-2.625 5.25a.44.44 0 0 1-.383.219h-4.129l-3.363 6.78a.45.45 0 0 1-.602.192L.906 14.66a.45.45 0 0 1-.191-.601c.11-.22.383-.301.601-.192l4.84 2.434 3.309-6.617a.47.47 0 0 1 .41-.246h4.102l2.488-5.004c.11-.22.383-.301.601-.192' />
    </g>
    <defs>
      <clipPath id='af08ae279535c57d078c43f5a99ea84a__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpSmRegularIcon);
export default ForwardRef;
