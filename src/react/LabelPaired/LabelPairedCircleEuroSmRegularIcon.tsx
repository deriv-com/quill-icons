import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m3.5.438h.656c-.027-.137-.027-.274-.027-.41 0-.137 0-.301.027-.466H3.5a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.437h.93c.492-1.012 1.558-1.75 2.761-1.75H8.34a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H7.19c-.71 0-1.34.355-1.75.874h2.434a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438H5.031c-.027.164-.027.3-.027.464 0 .137 0 .301.027.41h2.844a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438h-2.46c.41.574 1.038.93 1.776.93H8.34a.45.45 0 0 1 .437.437.45.45 0 0 1-.437.437H7.19a3.08 3.08 0 0 1-2.789-1.805H3.5a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='c81d2e78540e796818de321817288012__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroSmRegularIcon);
export default ForwardRef;
