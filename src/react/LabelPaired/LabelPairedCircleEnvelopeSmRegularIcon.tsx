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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m4.375-2.625h5.25A.9.9 0 0 1 10.5 9v3.5c0 .492-.41.875-.875.875h-5.25A.864.864 0 0 1 3.5 12.5V9c0-.465.383-.875.875-.875m5.25 1.34V9h-5.25v.465l2.406 1.285a.5.5 0 0 0 .219.055.5.5 0 0 0 .191-.055zm0 .984-2.023 1.067c-.192.109-.41.164-.602.164a1.27 1.27 0 0 1-.629-.164l-1.996-1.067V12.5h5.25z' />
    </g>
    <defs>
      <clipPath id='0c1f43a745c408a6a9f9aaf65c7b859b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmRegularIcon);
export default ForwardRef;
