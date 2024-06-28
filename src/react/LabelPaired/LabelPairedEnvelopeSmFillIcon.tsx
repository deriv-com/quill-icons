import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeSmFillIcon = (
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
      <path d='M1.313 5.5h11.375c.71 0 1.312.602 1.312 1.313 0 .437-.219.82-.547 1.066L7.52 12.336a.86.86 0 0 1-1.067 0L.52 7.879A1.31 1.31 0 0 1 0 6.813C0 6.102.574 5.5 1.313 5.5M0 8.563l5.934 4.484a1.76 1.76 0 0 0 2.105 0L14 8.562v5.688c0 .984-.793 1.75-1.75 1.75H1.75C.766 16 0 15.234 0 14.25z' />
    </g>
    <defs>
      <clipPath id='1583dda06bb1a73592a13c687140cd24__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmFillIcon);
export default ForwardRef;
