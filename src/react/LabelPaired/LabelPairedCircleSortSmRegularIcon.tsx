import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m6.672-4.238a.463.463 0 0 1 .629 0l2.625 2.625c.11.136.164.328.082.492a.43.43 0 0 1-.383.246h-5.25c-.191 0-.355-.082-.41-.246-.082-.164-.027-.356.082-.492zM5.414 9H8.56L7 7.441zm-1.367 3.39c-.11-.136-.164-.328-.082-.492a.42.42 0 0 1 .41-.273h5.25c.164 0 .328.11.383.273.082.165.027.356-.082.493L7.3 15.016a.463.463 0 0 1-.63 0zM7 14.087 8.559 12.5H5.414z' />
    </g>
    <defs>
      <clipPath id='d00b4c32636935c70d0d7d4da6ee95dd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortSmRegularIcon);
export default ForwardRef;
