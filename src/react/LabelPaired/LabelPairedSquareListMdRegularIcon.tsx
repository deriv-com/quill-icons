import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListMdRegularIcon = (
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
      <path d='M2 6c-.562 0-1 .469-1 1v10c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1zM0 7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3.25 2A.74.74 0 0 1 4 8.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75M6 9c0-.25.219-.5.5-.5h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4A.494.494 0 0 1 6 9m0 3c0-.25.219-.5.5-.5h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4A.494.494 0 0 1 6 12m0 3c0-.25.219-.5.5-.5h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4A.494.494 0 0 1 6 15m-2-2.25a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75M3.25 15a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='c7254f9aa448effed9afc781d72efbf4__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListMdRegularIcon);
export default ForwardRef;
