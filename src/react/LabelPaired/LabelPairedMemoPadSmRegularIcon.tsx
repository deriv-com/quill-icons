import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadSmRegularIcon = (
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
      <path d='M1.25 7.25V16c0 .492.383.875.875.875h8.75A.88.88 0 0 0 11.75 16V7.25zm0-.875h10.5V5.5a.9.9 0 0 0-.875-.875h-8.75a.88.88 0 0 0-.875.875zM12.625 5.5V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75M3.438 9h6.124a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H3.436A.43.43 0 0 1 3 9.438.45.45 0 0 1 3.438 9m0 2.625h6.124a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H3.436A.43.43 0 0 1 3 12.063a.45.45 0 0 1 .438-.438m0 2.625h3.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5A.43.43 0 0 1 3 14.688a.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='fa50f78c7220935f308728f3312d78a9__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadSmRegularIcon);
export default ForwardRef;
