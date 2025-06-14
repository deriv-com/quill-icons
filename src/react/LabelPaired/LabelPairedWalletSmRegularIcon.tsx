import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSmRegularIcon = (
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
      <path d='M2.188 4.625h10.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-10.5c-.739 0-1.313.602-1.313 1.313v7.875c0 .738.574 1.312 1.313 1.312h9.625c.71 0 1.312-.574 1.312-1.312V8.561a1.33 1.33 0 0 0-1.312-1.312h-8.75a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h8.75c1.203 0 2.187.984 2.187 2.188v6.124c0 1.231-.984 2.188-2.187 2.188H2.188A2.16 2.16 0 0 1 0 14.688V6.812C0 5.61.957 4.626 2.188 4.626m8.312 7.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656' />
    </g>
    <defs>
      <clipPath id='1bd1d0bce284441de1fa08490d482951__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmRegularIcon);
export default ForwardRef;
