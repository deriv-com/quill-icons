import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.125 7.25q0-.71-.355-1.312A2.63 2.63 0 0 0 6.5 4.626a2.63 2.63 0 0 0-2.27 1.311 2.53 2.53 0 0 0-.355 1.313q0 .71.355 1.313.355.6.957.957.63.355 1.313.355a2.63 2.63 0 0 0 2.27-1.312q.355-.602.355-1.313M3 7.25q0-.957.465-1.75T4.75 4.215A3.5 3.5 0 0 1 6.5 3.75q.93 0 1.75.465.82.492 1.285 1.285T10 7.25 9.535 9 8.25 10.285q-.82.465-1.75.465t-1.75-.465A3.6 3.6 0 0 1 3.465 9 3.4 3.4 0 0 1 3 7.25m-1.75 9.625h10.5q-.055-1.668-1.203-2.79-1.121-1.092-2.79-1.148H5.243q-1.667.056-2.789 1.149-1.148 1.12-1.203 2.789m-.875.055q.054-2.05 1.422-3.446 1.395-1.367 3.445-1.421h2.516q2.05.054 3.445 1.421 1.368 1.395 1.422 3.446a.73.73 0 0 1-.246.574.73.73 0 0 1-.574.246H1.195a.73.73 0 0 1-.574-.246.73.73 0 0 1-.246-.574' />
    </g>
    <defs>
      <clipPath id='9c3bcf5e56d9855cebf930721d5cf0ba__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSmRegularIcon);
export default ForwardRef;
