import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7-2.625c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875M6.89 12.5a2.623 2.623 0 0 1-2.515-2.625 2.626 2.626 0 0 1 5.25 0 2.94 2.94 0 0 1-.957 2.16l-2.27 2.106a.407.407 0 0 1-.601-.028.407.407 0 0 1 .027-.601z' />
    </g>
    <defs>
      <clipPath id='d48cd64abca07aa90b2eb8200ba54dbb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineSmRegularIcon);
export default ForwardRef;
