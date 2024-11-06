import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnMdFillIcon = (
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
      <path d='M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-1.25 7.75A.76.76 0 0 0 6 11a.74.74 0 0 0-.75.75v5.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75zm2.75 2a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75v3.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75zm-5.5 2a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75v1.5c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75z' />
    </g>
    <defs>
      <clipPath id='7b3a56fea187492ecb8c110c3390fd22__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnMdFillIcon);
export default ForwardRef;
