import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.563 5.938c0-1.204.957-2.188 2.187-2.188H8c1.203 0 2.188.984 2.188 2.188v3.39c-.137.055-.274.137-.41.192C9.503 9.219 9.093 9 8.655 9c-.082 0-.164.027-.219.027v-3.09A.47.47 0 0 0 8 5.5h-.875v.438a.45.45 0 0 1-.437.437H4.063a.43.43 0 0 1-.438-.437V5.5H2.75a.45.45 0 0 0-.437.438v9.625c0 .246.19.437.437.437h4.895c.3.602.738 1.148 1.257 1.559-.273.136-.601.191-.93.191H2.75a2.16 2.16 0 0 1-2.187-2.187zm3.062 8.75a.45.45 0 0 1 .438-.438h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.063a.43.43 0 0 1-.438-.437M8 10.53c0-.355.273-.656.656-.656.356 0 .656.3.656.656v.356a3.87 3.87 0 0 1 2.626-1.012c1.613 0 2.98.984 3.609 2.379a.655.655 0 0 1-.356.848.62.62 0 0 1-.847-.329 2.65 2.65 0 0 0-2.406-1.585c-.793 0-1.477.355-1.97.874h.876c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H8.656A.63.63 0 0 1 8 12.719zm.328 4.867c-.164-.328 0-.71.328-.875.328-.136.711.028.875.356.383.93 1.313 1.559 2.406 1.559.766 0 1.477-.329 1.942-.875h-.848a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h2.188c.355 0 .656.3.656.656v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.328c-.711.629-1.641.984-2.626.984a3.89 3.89 0 0 1-3.609-2.352' />
    </g>
    <defs>
      <clipPath id='fd3e7ceca39bde31efdff52d99ac268e__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateSmFillIcon);
export default ForwardRef;
