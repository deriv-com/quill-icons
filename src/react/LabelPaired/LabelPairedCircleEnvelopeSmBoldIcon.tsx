import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m-.191-7L3.5 8.918a.8.8 0 0 1 .273-.547.82.82 0 0 1 .602-.246h5.25q.356 0 .602.219a.9.9 0 0 1 .273.574L7.191 10.75a.34.34 0 0 1-.191.055 3 3 0 0 1-.191-.055m.82.766L10.5 9.93v2.57a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246h-5.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V9.93l2.871 1.586a1.5 1.5 0 0 0 1.258 0' />
    </g>
    <defs>
      <clipPath id='803d4d9933b78ccb4615cf7542be1efe__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmBoldIcon);
export default ForwardRef;
