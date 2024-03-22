import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5A.88.88 0 0 0 1 6.375v.875h14v-.875a.9.9 0 0 0-.875-.875zM1 8.125v1.75h14v-1.75zm0 2.625v4.375c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875V10.75zM.125 6.375c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm2.625 7.438a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.75a.43.43 0 0 1-.438-.437m3.5 0a.45.45 0 0 1 .438-.438h3.5a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-3.5a.43.43 0 0 1-.438-.437' />
    </g>
    <defs>
      <clipPath id='13b61c5cfc1961874b4eec746b24ae46__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardSmRegularIcon);
export default ForwardRef;
