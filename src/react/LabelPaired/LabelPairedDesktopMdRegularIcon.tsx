import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopMdRegularIcon = (
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
      <path d='M16 5H2c-.562 0-1 .469-1 1v6h16V6c0-.531-.469-1-1-1m2 7v3c0 1.125-.906 2-2 2h-4.687l.343 2H13.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-9a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.813l.343-2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2zM1 13v2c0 .563.438 1 1 1h14c.531 0 1-.437 1-1v-2zm6.313 6h3.343l-.344-2H7.656z' />
    </g>
    <defs>
      <clipPath id='cff5f88e2b25ea5e5b1d35583aa7db77__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopMdRegularIcon);
export default ForwardRef;
