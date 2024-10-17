import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenSmRegularIcon = (
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
      <path d='M.563 3.75h14.875a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438M1 5.5h.875v6.125c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875V5.5H15v6.125c0 .984-.793 1.75-1.75 1.75H8.438v1.148l2.488 2.489a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L8 15.316l-2.324 2.325a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l2.516-2.488v-1.148H2.75c-.984 0-1.75-.766-1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='b66a1b07785509407fddf165433d1a57__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmRegularIcon);
export default ForwardRef;
