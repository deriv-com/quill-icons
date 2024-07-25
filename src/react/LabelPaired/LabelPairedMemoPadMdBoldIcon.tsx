import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadMdBoldIcon = (
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
      <path d='M12.5 8h-11v10c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5zM2 4h10c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m1 6.25a.74.74 0 0 1 .75-.75h6.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-6.5a.72.72 0 0 1-.75-.75m0 3a.74.74 0 0 1 .75-.75h6.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-6.5a.72.72 0 0 1-.75-.75m0 3a.74.74 0 0 1 .75-.75h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='4be2bca0af62cadab3901c2558513bb1__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadMdBoldIcon);
export default ForwardRef;
