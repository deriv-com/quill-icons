import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneSmRegularIcon = (
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
      <path d='m10.254 11.297 3.062 1.312c.493.192.766.711.657 1.23l-.657 3.063c-.109.492-.546.875-1.066.875-.191 0-.355-.027-.52-.027-.109 0-.246 0-.355-.027C5.004 17.285 0 11.98 0 5.5c0-.492.355-.957.848-1.066l3.062-.657c.52-.109 1.04.164 1.23.657l1.313 3.062c.192.438.082.957-.3 1.258l-1.122.93a8.5 8.5 0 0 0 3.035 3.035l.93-1.121c.3-.383.82-.493 1.258-.301m1.969 5.578c.109 0 .191-.055.218-.164l.657-3.063c.027-.109-.028-.191-.11-.246L9.926 12.09a.32.32 0 0 0-.274.055l-.902 1.12a.88.88 0 0 1-1.121.192 8.9 8.9 0 0 1-3.336-3.336A.88.88 0 0 1 4.484 9l1.121-.902a.32.32 0 0 0 .055-.274L4.348 4.762c-.055-.082-.137-.137-.246-.11l-3.063.657c-.11 0-.164.109-.164.191 0 6.29 5.086 11.375 11.348 11.375' />
    </g>
    <defs>
      <clipPath id='e58982a8f97abe4ad1cecbbfa7d8a815__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmRegularIcon);
export default ForwardRef;
