import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopSmRegularIcon = (
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
      <path d='M14.125 4.625H1.875A.88.88 0 0 0 1 5.5v5.25h14V5.5a.9.9 0 0 0-.875-.875m1.75 6.125v2.625c0 .984-.793 1.75-1.75 1.75h-4.102l.301 1.75h1.614a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.063a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.585l.301-1.75H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75zM1 11.625v1.75c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875v-1.75zm5.523 5.25H9.45l-.3-1.75H6.823z' />
    </g>
    <defs>
      <clipPath id='fa637c982e2b39df12cbbd072e73b4ce__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopSmRegularIcon);
export default ForwardRef;
