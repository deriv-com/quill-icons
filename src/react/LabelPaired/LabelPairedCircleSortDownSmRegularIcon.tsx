import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownSmRegularIcon = (
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
      <path d='M.875 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305 6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75m13.125 0a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75m-7.328 4.266L4.047 12.39c-.11-.137-.164-.328-.082-.493a.42.42 0 0 1 .41-.273h5.25c.164 0 .328.11.383.273.082.165.027.356-.082.493L7.3 15.016a.463.463 0 0 1-.63 0M5.414 12.5 7 14.086 8.559 12.5zM4.047 9.137l2.625-2.625a.463.463 0 0 1 .629 0l2.625 2.625a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L7 7.44 4.676 9.766a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63' />
    </g>
    <defs>
      <clipPath id='b9e5e41e4f01e1463014f51c15dcf381__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownSmRegularIcon);
export default ForwardRef;
