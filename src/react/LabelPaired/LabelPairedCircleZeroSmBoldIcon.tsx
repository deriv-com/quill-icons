import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m0-10.5q1.12.027 1.86.766.738.738.765 1.859v1.75q-.027 1.12-.766 1.86-.738.738-1.859.765-1.12-.027-1.86-.766-.738-.738-.765-1.859v-1.75q.027-1.12.766-1.86Q5.879 7.278 7 7.25M5.688 9.875v1.75q.027.548.382.93.383.355.93.383.547-.028.93-.383.355-.383.383-.93v-1.75a1.43 1.43 0 0 0-.383-.93A1.43 1.43 0 0 0 7 8.562a1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93' />
    </g>
    <defs>
      <clipPath id='f8fa6c82cea68551e7ae48770f5897c0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroSmBoldIcon);
export default ForwardRef;
