import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillMdFillIcon = (
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
      <path d='M2 6h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2m2 10c0-1.094-.906-2-2-2v2zm-2-6c1.094 0 2-.875 2-2H2zm12 6h2v-2c-1.125 0-2 .906-2 2m2-6V8h-2c0 1.125.875 2 2 2M9 9c-1.094 0-2.062.594-2.625 1.5-.531.938-.531 2.094 0 3A3.03 3.03 0 0 0 9 15c1.063 0 2.031-.562 2.594-1.5.531-.906.531-2.062 0-3C11.03 9.594 10.063 9 9 9' />
    </g>
    <defs>
      <clipPath id='338dedfa6e3b4afa1545c4b2a6d7a2e2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdFillIcon);
export default ForwardRef;
