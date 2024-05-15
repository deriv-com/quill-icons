import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardMdFillIcon = (
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
      <path d='M2 5h14c1.094 0 2 .906 2 2v1H0V7c0-1.094.875-2 2-2m16 6v6c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-6zM3.5 15c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h2c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm3.5.5c0 .281.219.5.5.5h4c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-4c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='6cb7768c410fe8029762936e2d5a4840__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardMdFillIcon);
export default ForwardRef;
