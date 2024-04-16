import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardMdRegularIcon = (
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
      <path d='M2 6c-.562 0-1 .469-1 1v1h16V7c0-.531-.469-1-1-1zM1 9v2h16V9zm0 3v5c0 .563.438 1 1 1h14c.531 0 1-.437 1-1v-5zM0 7c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3 8.5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5m4 0c0-.25.219-.5.5-.5h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='28ff1b75be4060c57c7f94223914decb__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardMdRegularIcon);
export default ForwardRef;
