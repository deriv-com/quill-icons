import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.406 4.625H12.47c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.406A1.08 1.08 0 0 0 1.312 7.03v7.438c0 .629.465 1.094 1.094 1.094h9.188a1.08 1.08 0 0 0 1.094-1.094V9.656c0-.601-.493-1.094-1.094-1.094H3.28a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h8.313A2.43 2.43 0 0 1 14 9.656v4.813a2.41 2.41 0 0 1-2.406 2.406H2.406A2.39 2.39 0 0 1 0 14.469V7.03a2.41 2.41 0 0 1 2.406-2.406m8.094 8.313a.864.864 0 0 1-.875-.876c0-.464.383-.874.875-.874a.9.9 0 0 1 .875.874c0 .493-.41.876-.875.876' />
    </g>
    <defs>
      <clipPath id='c60109d98a32f0e8765d47fedc7fd090__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmBoldIcon);
export default ForwardRef;
