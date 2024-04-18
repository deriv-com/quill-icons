import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardMdBoldIcon = (
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
      <path d='M16 6.5H2c-.281 0-.5.25-.5.5v1h15V7c0-.25-.25-.5-.5-.5m.5 4.5h-15v6c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5zM2 5h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m1.75 9.5h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m4 0h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='6badd74749f62d34eb82ba90295c03e3__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardMdBoldIcon);
export default ForwardRef;
