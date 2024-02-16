import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoSmRegularIcon = (
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
      <path d='M4.172 5.5a3.02 3.02 0 0 0-2.106.875l-.765.738q-.3.274-.602 0-.273-.3 0-.601l.739-.766a3.93 3.93 0 0 1 2.734-1.121q1.613.027 2.707 1.121Q7.945 6.812 8 8.426q-.028 1.64-1.203 2.762L1.684 16h6.754q.41.027.437.438-.027.41-.437.437H.561q-.3 0-.41-.273a.49.49 0 0 1 .11-.493l5.933-5.55a2.95 2.95 0 0 0 .93-2.133q-.027-1.23-.875-2.078-.82-.82-2.078-.848' />
    </g>
    <defs>
      <clipPath id='8ea00060a0459dd0825433150145186e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmRegularIcon);
export default ForwardRef;
