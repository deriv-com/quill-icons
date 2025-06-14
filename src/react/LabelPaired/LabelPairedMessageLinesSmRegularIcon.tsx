import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesSmRegularIcon = (
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
      <path d='M5.25 15.125v1.313l2.68-1.997a.86.86 0 0 1 .52-.191h3.8a.88.88 0 0 0 .875-.875V5.5a.9.9 0 0 0-.875-.875H1.75a.88.88 0 0 0-.875.875v7.875c0 .492.383.875.875.875h2.625a.9.9 0 0 1 .875.875M1.75 3.75h10.5c.957 0 1.75.793 1.75 1.75v7.875c0 .984-.793 1.75-1.75 1.75h-3.8l-3.391 2.543c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41v-2.188H1.75c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m2.188 3.938h6.124a.47.47 0 0 1 .438.437.45.45 0 0 1-.437.438H3.936a.43.43 0 0 1-.437-.438.45.45 0 0 1 .438-.437m0 2.625h3.5a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-3.5a.43.43 0 0 1-.438-.438.45.45 0 0 1 .438-.437' />
    </g>
    <defs>
      <clipPath id='fc67643ca1a3441580347cb9e0d563ce__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesSmRegularIcon);
export default ForwardRef;
