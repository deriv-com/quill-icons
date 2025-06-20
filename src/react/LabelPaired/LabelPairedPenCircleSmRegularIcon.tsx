import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m9.05-2.516c-.163-.164-.437-.164-.628 0l-.574.575L8.94 9.902l.575-.574a.416.416 0 0 0 0-.629zM4.978 11.68a.55.55 0 0 0-.11.218l-.328 1.34 1.34-.355c.055 0 .137-.055.191-.11l2.242-2.242L7.22 9.437zM7.82 7.605c.52-.52 1.34-.52 1.86 0l.465.493c.52.492.52 1.34 0 1.832l-3.446 3.472a1.4 1.4 0 0 1-.629.329l-2.05.519c-.137.027-.301 0-.41-.11a.46.46 0 0 1-.11-.41l.52-2.05c.054-.246.164-.438.328-.63z' />
    </g>
    <defs>
      <clipPath id='7af2419ac1662efa57b026af49ba48b1__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleSmRegularIcon);
export default ForwardRef;
