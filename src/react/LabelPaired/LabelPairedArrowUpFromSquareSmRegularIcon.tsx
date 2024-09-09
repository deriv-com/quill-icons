import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareSmRegularIcon = (
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
      <path d='m7.3 3.887 2.845 2.843a.463.463 0 0 1 0 .63.463.463 0 0 1-.63 0L7.438 5.253V12.5a.45.45 0 0 1-.437.438.43.43 0 0 1-.437-.438V5.254L4.457 7.359a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.629l2.844-2.843a.463.463 0 0 1 .629 0m-5.55.738h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H1.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875V6.375a.9.9 0 0 0-.875-.875h-.875a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438h.875c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V6.375c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='8e5c5aa3ace77cc23e44c465ef1dbad5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmRegularIcon);
export default ForwardRef;
