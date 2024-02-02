import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93M5.031 7.25h3.5q.438.027.602.41a.7.7 0 0 1-.164.738L7.574 9.656q.903.11 1.45.766.574.63.601 1.531-.027.984-.684 1.613-.629.657-1.613.684h-.766q-1.312-.027-2.023-1.121l-.055-.11q-.273-.546.192-.902.546-.274.902.219l.082.11q.329.464.902.492h.766q.41 0 .711-.274.274-.3.274-.71 0-.44-.301-.712a.93.93 0 0 0-.684-.273H5.906q-.437-.027-.601-.41a.7.7 0 0 1 .164-.739l1.367-1.258H5.03q-.601-.054-.656-.656.054-.601.656-.656' />
    </g>
    <defs>
      <clipPath id='7cfc7eb66ae0afcd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeSmBoldIcon);
export default ForwardRef;
