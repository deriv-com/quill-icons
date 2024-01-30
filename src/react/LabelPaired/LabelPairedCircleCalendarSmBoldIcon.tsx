import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarSmBoldIcon = (
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
      <path d='M12.688 10.75q0-1.56-.766-2.844a5.7 5.7 0 0 0-2.078-2.078A5.64 5.64 0 0 0 7 5.062q-1.504 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.45 5.45 0 0 0-.765 2.844q0 1.56.765 2.844.738 1.286 2.078 2.078 1.34.765 2.844.765t2.844-.765q1.34-.794 2.078-2.078.765-1.286.765-2.844M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m5.688-3.937q.41.027.437.437v.438h1.75V7.25q.027-.41.438-.437.41.027.437.437v.438h.438q.546.027.93.382.355.383.382.93v3.5a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H4.814a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V9q.027-.547.383-.93.383-.355.93-.383h.437V7.25q.027-.41.438-.437M4.813 12.5h4.375V9.875H4.812z' />
    </g>
    <defs>
      <clipPath id='5fefb30c9e54bffc5a9c8a083e9e9010__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarSmBoldIcon);
export default ForwardRef;
