import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeSmRegularIcon = (
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
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m4.375-2.625h5.25q.383 0 .629.246A.85.85 0 0 1 10.5 9v3.5a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246h-5.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V9q0-.383.246-.629a.85.85 0 0 1 .629-.246m5.25 1.34V9h-5.25v.465l2.434 1.285q.081.028.191.055a.5.5 0 0 0 .219-.055zm0 .984-1.996 1.067a1.5 1.5 0 0 1-1.258 0l-1.996-1.067V12.5h5.25z' />
    </g>
    <defs>
      <clipPath id='0ee98af2e5befcca3d6c35a14d4ede67__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmRegularIcon);
export default ForwardRef;
