import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.063q.027-.411.438-.438H8q.3 0 .41.273a.49.49 0 0 1-.11.493L3.435 9.875h1.941q1.476.027 2.488 1.012.985 1.012 1.012 2.488-.027 1.476-1.012 2.488-1.011.985-2.488 1.012H2.559q-.739 0-1.368-.383a2.47 2.47 0 0 1-.957-1.066l-.054-.11q-.165-.382.191-.574.355-.164.574.192l.055.109q.52.93 1.559.957h2.816q1.12-.027 1.86-.766.738-.738.765-1.859-.027-1.12-.766-1.86-.738-.738-1.859-.765H2.313q-.302 0-.41-.273a.49.49 0 0 1 .109-.493L6.879 5.5H.563q-.411-.027-.438-.437' />
    </g>
    <defs>
      <clipPath id='5d12048602375e060c7e64d956fee7d7__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmRegularIcon);
export default ForwardRef;
