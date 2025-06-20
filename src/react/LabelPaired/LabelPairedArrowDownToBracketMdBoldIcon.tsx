import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.531 10.781-4 4c-.312.313-.781.313-1.062 0l-4-4a.684.684 0 0 1 0-1.031.684.684 0 0 1 1.031 0l2.719 2.719V4.75a.76.76 0 0 1 .75-.75.74.74 0 0 1 .75.75v7.719l2.718-2.719c.313-.312.782-.312 1.063 0a.684.684 0 0 1 0 1.031zM1.5 14.75v2.5c0 .719.531 1.25 1.25 1.25h8.5c.688 0 1.25-.531 1.25-1.25v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2.5c0 1.531-1.25 2.75-2.75 2.75h-8.5A2.734 2.734 0 0 1 0 17.25v-2.5A.74.74 0 0 1 .75 14a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='f0185d4c9c216c30681c36526f14a414__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketMdBoldIcon);
export default ForwardRef;
