import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiSmRegularIcon = (
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
      <path d='M.988 8.781q-.3.274-.601 0-.274-.3 0-.601A12 12 0 0 1 4.27 5.582q2.187-.93 4.73-.957 2.543.027 4.73.957 2.215.93 3.883 2.598.274.3 0 .601-.3.274-.601 0a11.6 11.6 0 0 0-3.61-2.406Q11.352 5.527 9 5.5q-2.352.027-4.402.875a11.6 11.6 0 0 0-3.61 2.406M9 9.875q-1.449 0-2.707.547a7 7 0 0 0-2.242 1.504q-.3.246-.602 0-.273-.328 0-.63A7.8 7.8 0 0 1 5.938 9.63 7.5 7.5 0 0 1 9 9q1.641 0 3.063.629a7.8 7.8 0 0 1 2.488 1.668q.273.3 0 .629-.3.246-.602 0a7 7 0 0 0-2.242-1.504A6.7 6.7 0 0 0 9 9.875m0 4.375a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629q0 .383.246.629A.85.85 0 0 0 9 16a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.85.85 0 0 0-.246-.629A.85.85 0 0 0 9 14.25m0 2.625q-.985-.027-1.504-.875-.492-.875 0-1.75.52-.848 1.504-.875.985.027 1.504.875.492.875 0 1.75-.52.848-1.504.875' />
    </g>
    <defs>
      <clipPath id='bb0957388999c3cc8b206c9ed5d9d92d__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmRegularIcon);
export default ForwardRef;
