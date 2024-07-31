import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownSmFillIcon = (
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
      <path d='M5.965 3.86a.866.866 0 0 1 1.176.382l3.254 6.508h3.855c.328 0 .629.191.766.492l2.625 5.25a.866.866 0 0 1-.383 1.176.867.867 0 0 1-1.176-.383L13.703 12.5H9.875c-.355 0-.656-.164-.793-.465L5.965 5.801 1.508 8.043A.866.866 0 0 1 .332 7.66a.866.866 0 0 1 .383-1.176z' />
    </g>
    <defs>
      <clipPath id='428252cd8bf3e4965301bbaeb3c27e88__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownSmFillIcon);
export default ForwardRef;
