import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m-.902-8.941L5.44 9.3q-.519.328-.93-.137-.327-.492.137-.902l.657-.52a2.44 2.44 0 0 1 1.504-.492h.082q.984.054 1.64.71.63.657.656 1.642a2.42 2.42 0 0 1-.738 1.695l-1.75 1.64h2.27q.601.056.656.657-.054.601-.656.656H5.03q-.437-.027-.601-.41a.65.65 0 0 1 .164-.711l2.953-2.79a.96.96 0 0 0 .328-.737q0-.439-.3-.711a.92.92 0 0 0-.712-.301l-.082-.027a1.05 1.05 0 0 0-.683.246' />
    </g>
    <defs>
      <clipPath id='b90a08ccadb9ada71e7c005b8601fa4a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoSmBoldIcon);
export default ForwardRef;
