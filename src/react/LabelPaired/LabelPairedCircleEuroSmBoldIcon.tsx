import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroSmBoldIcon = (
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
      <path d='M12.688 10.75q0-1.56-.766-2.844a5.7 5.7 0 0 0-2.078-2.078A5.64 5.64 0 0 0 7 5.062q-1.504 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.45 5.45 0 0 0-.765 2.844q0 1.56.765 2.844.738 1.286 2.078 2.078 1.34.765 2.844.765t2.844-.765q1.34-.794 2.078-2.078.765-1.286.765-2.844M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m3.5.438h.438a3 3 0 0 1-.028-.41q0-.247.027-.466H3.5q-.41-.027-.437-.437.027-.41.437-.437h.684A3.6 3.6 0 0 1 5.44 7.852q.876-.575 1.997-.602h1.12q.602.054.657.656-.055.601-.656.657H7.438q-1.122.027-1.75.874h2.187q.41.028.438.438-.029.41-.438.438H5.277q-.054.218-.054.464 0 .22.054.41h2.598q.41.028.438.438-.029.41-.438.438H5.633q.656.875 1.805.93h1.12q.602.054.657.655-.055.575-.656.657H7.438q-1.149-.027-1.997-.63a3.7 3.7 0 0 1-1.285-1.613H3.5q-.41-.027-.437-.437.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='3a06e61581f499c6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroSmBoldIcon);
export default ForwardRef;
