import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeMdBoldIcon = (
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
      <path d='M2 6.5c-.281 0-.5.25-.5.5v10c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5V7c0-.25-.25-.5-.5-.5zM0 7c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3.75 1a.76.76 0 0 1 .75.75v6.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-6.5A.74.74 0 0 1 3.75 8M6 8c.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-7c0-.25.219-.5.5-.5m1.5.75A.74.74 0 0 1 8.25 8a.76.76 0 0 1 .75.75v6.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75zM11.75 8a.76.76 0 0 1 .75.75v6.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-6.5a.74.74 0 0 1 .75-.75m2.25.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5z' />
    </g>
    <defs>
      <clipPath id='d8b1ecbcd34d916ee21e8ff2042bae0c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeMdBoldIcon);
export default ForwardRef;
