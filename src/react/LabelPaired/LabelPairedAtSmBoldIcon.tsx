import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtSmBoldIcon = (
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
      <path d='M7 5.063q-2.406.054-4.02 1.667-1.613 1.614-1.667 4.02.054 2.406 1.667 4.02Q4.594 16.383 7 16.438q.602.054.656.656-.054.601-.656.656-1.968-.027-3.527-.957a6.94 6.94 0 0 1-2.516-2.516Q.027 12.72 0 10.75q.027-1.968.957-3.527a6.94 6.94 0 0 1 2.516-2.516Q5.032 3.777 7 3.75q1.969.027 3.527.957a6.94 6.94 0 0 1 2.516 2.516q.93 1.559.957 3.527v.766q-.027 1.066-.738 1.777t-1.778.738q-1.34-.054-2.05-1.066Q8.477 13.976 7 14.03q-1.394-.027-2.324-.957t-.957-2.324q.027-1.395.957-2.324.93-.93 2.324-.957 1.203.027 2.078.738a.7.7 0 0 1 .547-.3q.602.053.656.656v2.953q0 .52.356.847.328.356.847.356a1.1 1.1 0 0 0 .848-.356q.355-.328.355-.847v-.766q-.054-2.406-1.667-4.02Q9.406 5.117 7 5.062m1.969 5.687q-.027-1.12-.985-1.695-.984-.547-1.968 0-.957.575-.985 1.695.027 1.121.985 1.695.984.548 1.968 0 .957-.574.985-1.695' />
    </g>
    <defs>
      <clipPath id='4bb5abbd29629a7983bf64b66361c1e9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtSmBoldIcon);
export default ForwardRef;
