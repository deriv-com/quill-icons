import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewSmBoldIcon = (
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
      <path d='M3.313 3.75c.355 0 .656.3.656.656v11.621c0 .246.164.41.41.41H14.44c.383 0 .657.301.657.657a.63.63 0 0 1-.657.656H3.887c-.684 0-1.23-.547-1.23-1.23V4.406c0-.355.273-.656.656-.656m11.593 5.469c.274.246.274.656 0 .93l-4.265 4.265a1.09 1.09 0 0 1-1.559 0l-.957-.984-1.723 1.722c-.273.274-.683.274-.93 0-.273-.246-.273-.656 0-.93l1.86-1.859a1.09 1.09 0 0 1 1.559 0l.984.985 4.102-4.13c.273-.273.683-.273.93 0m-4.73-3.09c0 .328-.301.601-.63.601-.355 0-.655-.273-.655-.601s.3-.602.656-.602c.328 0 .629.274.629.602m.492-.629h.957L10.34 9h-.957zm-4.293 0H8.59V9h-.848V6.293H6.375z' />
    </g>
    <defs>
      <clipPath id='dbb4faf889ac32124d6871f60c26833e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewSmBoldIcon);
export default ForwardRef;
