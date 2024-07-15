import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3 6c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m1-4c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1m-1 7c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m3-7.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75zm0 3a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75zm0 3a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75z' />
    </g>
    <defs>
      <clipPath id='efef555b84b18b8800562d2c5dbdb1ad__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListMdFillIcon);
export default ForwardRef;
