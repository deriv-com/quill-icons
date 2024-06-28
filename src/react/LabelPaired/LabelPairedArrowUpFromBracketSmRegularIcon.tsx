import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketSmRegularIcon = (
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
      <path d='m6.8 3.887 3.5 3.5a.463.463 0 0 1 0 .629.463.463 0 0 1-.628 0L6.937 5.254v7.684a.45.45 0 0 1-.437.437.43.43 0 0 1-.437-.437V5.254L3.3 8.016a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l3.5-3.5a.463.463 0 0 1 .63 0m-5.55 9.05v2.626c0 .738.574 1.312 1.313 1.312h7.874c.711 0 1.313-.574 1.313-1.312v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v2.624c0 1.231-.984 2.188-2.187 2.188H2.561a2.16 2.16 0 0 1-2.187-2.187v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438' />
    </g>
    <defs>
      <clipPath id='18788e23398d49c578b4780595006676__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmRegularIcon);
export default ForwardRef;
