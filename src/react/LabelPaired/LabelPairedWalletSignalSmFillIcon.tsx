import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalSmFillIcon = (
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
      <path d='M.25 6.375c0-.957.766-1.75 1.75-1.75h10.5a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H2.438A.45.45 0 0 0 2 6.813c0 .246.191.437.438.437H12.5c.957 0 1.75.793 1.75 1.75v1.477a7.2 7.2 0 0 0-2.844-.602c-.847 0-1.531.71-1.531 1.531v5.469H2c-.984 0-1.75-.766-1.75-1.75zm10.5 5.031c0-.355.273-.656.656-.656 3.5 0 6.344 2.844 6.344 6.344 0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656c0-2.762-2.269-5.032-5.03-5.032a.63.63 0 0 1-.657-.656m0 2.625c0-.355.273-.656.656-.656a3.723 3.723 0 0 1 3.719 3.719c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656 2.43 2.43 0 0 0-2.407-2.407.63.63 0 0 1-.656-.656m0 2.844c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='ae09dcaecaa382e88ca0f0101756dbfd__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalSmFillIcon);
export default ForwardRef;
