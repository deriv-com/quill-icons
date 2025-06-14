import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.5a.88.88 0 0 0-.875.875v8.75c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875v-8.75a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm2.844 1.75c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656m2.406 0a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m0 2.625a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m0 2.625a.45.45 0 0 1 .438-.437h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438m-1.75-1.969a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656m-.656 1.969c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656' />
    </g>
    <defs>
      <clipPath id='5c46df3c1f6d8b57f20aadbfae9e1751__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListSmRegularIcon);
export default ForwardRef;
