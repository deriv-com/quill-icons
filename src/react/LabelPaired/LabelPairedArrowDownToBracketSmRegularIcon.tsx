import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketSmRegularIcon = (
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
      <path d='m10.3 9.766-3.5 3.5a.463.463 0 0 1-.628 0l-3.5-3.5a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l2.762 2.762v-7.71A.45.45 0 0 1 6.5 3.75a.47.47 0 0 1 .438.438v7.71l2.734-2.761a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629m-9.05 3.172v2.624c0 .739.574 1.313 1.313 1.313h7.874c.711 0 1.313-.574 1.313-1.312v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v2.624c0 1.231-.984 2.188-2.187 2.188H2.561a2.16 2.16 0 0 1-2.187-2.187v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438' />
    </g>
    <defs>
      <clipPath id='5820fd12bc72d482241ad54285f491d9__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmRegularIcon);
export default ForwardRef;
