import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashSmBoldIcon = (
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
      <path d='M.387 4.023a.604.604 0 0 1 .902-.109l2.625 2.023C5.227 4.57 7.031 3.75 9 3.75a6.97 6.97 0 0 1 6.043 3.5c1.258 2.188 1.258 4.84 0 7-.055.11-.11.191-.164.3l2.598 2.052c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903m2.105 4.13 1.094.874a5.2 5.2 0 0 0-.273 1.723c0 1.531.574 2.926 1.558 3.938a3.47 3.47 0 0 1 3.145-2.16l1.668 1.284H8.125a2.2 2.2 0 0 0-2.16 1.778A5.7 5.7 0 0 0 9 16.438c1.066 0 2.078-.301 2.953-.82l1.094.847A7.05 7.05 0 0 1 9 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.094-1.86-1.23-4.102-.438-6.098m2.461-1.395 1.86 1.449c.19-.437.546-.793.984-1.066.738-.41 1.64-.41 2.406 0a2.43 2.43 0 0 1 1.203 2.078c0 .738-.355 1.449-.902 1.886l3.336 2.625c.52-.875.848-1.886.848-2.98 0-3.117-2.57-5.687-5.688-5.687a5.66 5.66 0 0 0-4.047 1.695m2.953 2.324 1.477 1.176c.246-.11.437-.274.547-.465a1.11 1.11 0 0 0 0-1.094A1.04 1.04 0 0 0 9 8.152c-.41 0-.766.192-.957.547-.082.11-.11.246-.137.383' />
    </g>
    <defs>
      <clipPath id='5fd065b1cfb35a63e48b085a08ae1765__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashSmBoldIcon);
export default ForwardRef;
