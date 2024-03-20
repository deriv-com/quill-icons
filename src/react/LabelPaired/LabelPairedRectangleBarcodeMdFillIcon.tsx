import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 5h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m1.75 3a.74.74 0 0 0-.75.75v6.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-6.5A.76.76 0 0 0 3.75 8m1.75.5v7c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-7c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5M8.25 8a.74.74 0 0 0-.75.75v6.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-6.5A.76.76 0 0 0 8.25 8m2.75.75v6.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-6.5a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75M14.5 8c-.281 0-.5.25-.5.5v7c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-7c0-.25-.25-.5-.5-.5' />
    </g>
    <defs>
      <clipPath id='1cdec803870790cb6d98eb7565bd2ed2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeMdFillIcon);
export default ForwardRef;
