import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketMdBoldIcon = (
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
      <path d='m7.531 4.219 3.969 4c.313.312.313.781 0 1.062-.281.313-.75.313-1.062 0l-2.72-2.719v7.688c0 .438-.312.75-.75.75a.74.74 0 0 1-.75-.75V6.563L3.5 9.28a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l4-4c.281-.282.75-.282 1.062 0M1.5 14.75v2.5c0 .719.531 1.25 1.25 1.25h8.5c.688 0 1.25-.531 1.25-1.25v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2.5c0 1.531-1.25 2.75-2.75 2.75h-8.5A2.734 2.734 0 0 1 0 17.25v-2.5A.74.74 0 0 1 .75 14a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='9fb095bfa5015ed1838b5402ea0bfefb__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdBoldIcon);
export default ForwardRef;
