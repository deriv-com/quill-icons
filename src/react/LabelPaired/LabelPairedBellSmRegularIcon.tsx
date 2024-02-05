import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.063 4.188q.027-.411.437-.438.41.027.438.438v.464q1.695.192 2.789 1.395Q10.847 7.25 10.875 9v.793a4.56 4.56 0 0 0 1.313 3.2l.082.081q.355.356.355.848a1.1 1.1 0 0 1-.355.848 1.1 1.1 0 0 1-.848.355H1.578q-.52 0-.848-.355a1.1 1.1 0 0 1-.355-.848q0-.492.355-.875l.083-.055a4.56 4.56 0 0 0 1.312-3.199V9q.027-1.75 1.148-2.953 1.095-1.203 2.79-1.395zM6.5 5.5q-1.476.027-2.488 1.012Q3.027 7.523 3 9v.793q-.027 2.216-1.586 3.8l-.055.083a.34.34 0 0 0-.109.246q.028.3.328.328h9.844q.3-.027.328-.328a.34.34 0 0 0-.11-.246l-.054-.082Q10.026 12.008 10 9.793V9q-.027-1.476-1.04-2.488Q7.978 5.527 6.5 5.5m-.82 10.8q.219.548.82.575.601-.027.82-.574.165-.383.575-.274.356.165.246.547a1.83 1.83 0 0 1-.63.848 1.64 1.64 0 0 1-1.011.328q-.574 0-1.012-.328a1.83 1.83 0 0 1-.629-.848q-.109-.382.246-.547.41-.109.575.274' />
    </g>
    <defs>
      <clipPath id='60433d46f68f189766e8015850ec7bb7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmRegularIcon);
export default ForwardRef;
