import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCircleMinusSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 6.375c0-.957.766-1.75 1.75-1.75h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H2.438A.45.45 0 0 0 2 6.813c0 .246.191.437.438.437H12.5c.957 0 1.75.793 1.75 1.75v.027c-.164 0-.3-.027-.437-.027A4.8 4.8 0 0 0 9 13.813c0 1.175.41 2.242 1.094 3.062H2c-.984 0-1.75-.766-1.75-1.75zm9.625 7.438c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m1.75 0c0 .246.191.437.438.437h3.5a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-3.5a.45.45 0 0 0-.438.438' />
    </g>
    <defs>
      <clipPath id='aca23c594d2db23f23e3741757b68a04__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusSmFillIcon);
export default ForwardRef;
