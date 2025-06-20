import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListSmFillIcon = (
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
      <path d='M.375 6.375c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM3 11.625a.88.88 0 0 0 .875-.875A.9.9 0 0 0 3 9.875a.88.88 0 0 0-.875.875c0 .492.383.875.875.875m.875-3.5A.9.9 0 0 0 3 7.25a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875M3 14.25a.88.88 0 0 0 .875-.875A.9.9 0 0 0 3 12.5a.88.88 0 0 0-.875.875c0 .492.383.875.875.875m2.625-6.781c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H10a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656z' />
    </g>
    <defs>
      <clipPath id='0be51133552d2b7f371cc0fcad5a2983__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListSmFillIcon);
export default ForwardRef;
