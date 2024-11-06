import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownSmFillIcon = (
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
      <path d='M.25 5.5c0-.465.383-.875.875-.875h12.25a.9.9 0 0 1 .875.875v.875c0 .492-.41.875-.875.875H1.125a.864.864 0 0 1-.875-.875zm.875 2.625h12.25v.902A4.814 4.814 0 0 0 9 13.813c0 1.175.41 2.242 1.094 3.062H2.875c-.984 0-1.75-.766-1.75-1.75zm3.5 2.188c0 .246.191.437.438.437h4.375a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H5.062a.45.45 0 0 0-.437.438m5.25 3.5c0-1.395.738-2.708 1.969-3.391a3.9 3.9 0 0 1 3.937 0 3.93 3.93 0 0 1 1.969 3.39 3.97 3.97 0 0 1-1.969 3.419c-1.23.71-2.734.71-3.937 0a3.92 3.92 0 0 1-1.969-3.419m2.078-.083a.463.463 0 0 0 0 .63l1.531 1.53a.463.463 0 0 0 .63 0l1.53-1.53a.463.463 0 0 0 0-.63.463.463 0 0 0-.628 0l-.766.793v-2.46a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v2.46l-.793-.793a.463.463 0 0 0-.629 0' />
    </g>
    <defs>
      <clipPath id='a9ed09e6e5f776cd67fee64cc113fd9e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownSmFillIcon);
export default ForwardRef;
