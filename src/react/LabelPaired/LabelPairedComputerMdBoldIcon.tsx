import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 6.5H2c-.281 0-.5.25-.5.5v7c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V7c0-.25-.25-.5-.5-.5M2 16c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H9.281l.5 1.5h1.469a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-8.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.438l.5-1.5zm3.781 1.5h2.407l-.5-1.5H6.28zM16.5 6.5v1h2v-1zm0 2.5v1h2V9zm2 2.5h-2v6h2zm-3.5-5A1.5 1.5 0 0 1 16.5 5h2c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a1.48 1.48 0 0 1-1.5-1.5zm2.5 8.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='335437a664e6aed4d0bc5340fe02348e__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMdBoldIcon);
export default ForwardRef;
