import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneSmBoldIcon = (
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
      <path d='m10.254 11.297 3.062 1.312c.493.192.766.711.657 1.23l-.657 3.063c-.109.492-.574.875-1.066.875-.191 0-.355-.027-.52-.027-.273 0-.546-.027-.793-.055A12.25 12.25 0 0 1 0 5.5c0-.492.355-.957.848-1.066l3.062-.657c.52-.109 1.04.164 1.23.657l1.313 3.062c.192.438.082.957-.3 1.258l-1.122.93a8.5 8.5 0 0 0 3.035 3.035l.93-1.121c.3-.383.82-.493 1.258-.301m1.805 5.14.574-2.707-2.735-1.175-.793.984a1.34 1.34 0 0 1-1.695.3 9.76 9.76 0 0 1-3.5-3.5 1.34 1.34 0 0 1 .3-1.694l.985-.793L4.02 5.117l-2.707.574a10.89 10.89 0 0 0 10.746 10.747' />
    </g>
    <defs>
      <clipPath id='fb93836607cfa1125caf0e3d9461bd95__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmBoldIcon);
export default ForwardRef;
