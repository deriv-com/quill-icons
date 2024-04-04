import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 18c0 .281.219.5.5.5h8c.25 0 .5-.219.5-.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5zM2 4h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m4.75 8.75v4a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-4A.74.74 0 0 1 6 12a.76.76 0 0 1 .75.75m2.75 1v3a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m-5.5 1v2a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='82a12ea5f854487b58f6557ffff0e184__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnMdBoldIcon);
export default ForwardRef;
