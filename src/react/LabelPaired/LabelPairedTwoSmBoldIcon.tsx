import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoSmBoldIcon = (
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
      <path d='M4.172 5.938q-1.149.027-1.942.792l-.984.985q-.465.383-.93 0-.382-.465 0-.93l.985-.957q1.176-1.176 2.87-1.203h.192q1.64.054 2.735 1.121Q8.164 6.84 8.218 8.48q-.026 1.668-1.23 2.817L2.45 15.562h5.77q.601.056.656.657-.054.601-.656.656H.78q-.437-.027-.601-.41a.65.65 0 0 1 .164-.711l5.77-5.414q.765-.765.792-1.86-.027-1.065-.738-1.804-.738-.71-1.805-.739z' />
    </g>
    <defs>
      <clipPath id='f46a4e3bddaf563d8a7fd34ac7f14f52__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmBoldIcon);
export default ForwardRef;
