import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenSmRegularIcon = (
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
      <path d='M10.875 4.625h-8.75a.88.88 0 0 0-.875.875v7h10.5v-7a.9.9 0 0 0-.875-.875m.875 8.75H1.25V16c0 .492.383.875.875.875h8.75A.88.88 0 0 0 11.75 16zM2.125 3.75h8.75c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m3.063 11.375a.45.45 0 0 1 .437-.437h1.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-1.75a.43.43 0 0 1-.437-.438' />
    </g>
    <defs>
      <clipPath id='5218204568b248050ce2c08364d7fd66__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenSmRegularIcon);
export default ForwardRef;
