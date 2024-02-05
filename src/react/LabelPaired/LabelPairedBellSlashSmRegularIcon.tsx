import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashSmRegularIcon = (
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
      <path d='m10.613 14.25 1.094.875H4.078q-.52 0-.848-.355a1.1 1.1 0 0 1-.355-.848q0-.492.355-.875l.083-.055a4.56 4.56 0 0 0 1.312-3.199V9.52l.875.683a5.47 5.47 0 0 1-1.586 3.39l-.055.083a.34.34 0 0 0-.109.246q.027.3.328.328zm-2.05-9.598v-.465q.027-.41.437-.437.41.027.438.438v.464q1.695.192 2.789 1.395Q13.347 7.25 13.375 9v.793a4.56 4.56 0 0 0 1.313 3.2l.082.054a.3.3 0 0 0 .054.082l-2.05-1.613a5.6 5.6 0 0 1-.274-1.723V9q-.027-1.476-1.012-2.488Q10.477 5.527 9 5.5q-1.504.027-2.488 1.04L5.8 5.991q1.094-1.148 2.762-1.34M8.18 16.301q.219.547.82.574.601-.027.82-.574.165-.383.575-.274.355.165.246.547a1.83 1.83 0 0 1-.63.848A1.64 1.64 0 0 1 9 17.75q-.574 0-1.012-.328a1.83 1.83 0 0 1-.629-.848q-.109-.382.246-.547.41-.109.575.274M.96 3.832l16.626 13.152q.3.274.082.602-.3.3-.629.082L.414 4.543q-.3-.3-.082-.629.3-.274.629-.082' />
    </g>
    <defs>
      <clipPath id='68d73771545c28b1169426f4e12f9fed__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashSmRegularIcon);
export default ForwardRef;
