import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletMdRegularIcon = (
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
      <path d='M2 5c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1zM0 6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm6 10.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='db359ab88dc2387e0891689ab23057d4__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletMdRegularIcon);
export default ForwardRef;
