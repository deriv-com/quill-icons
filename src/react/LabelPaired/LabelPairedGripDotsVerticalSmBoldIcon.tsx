import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629A.85.85 0 0 1 1.75 5.5q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246m0 4.375a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246m.875 3.5a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629M5.25 7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629A.85.85 0 0 1 5.25 5.5q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246m.875 3.5a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629M5.25 16a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246' />
    </g>
    <defs>
      <clipPath id='7871bb2fb7377e4b963a134bfcb7db1f__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalSmBoldIcon);
export default ForwardRef;
