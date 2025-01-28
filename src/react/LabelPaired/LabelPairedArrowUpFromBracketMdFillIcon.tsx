import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketMdFillIcon = (
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
      <path d='m7.688 4.313 4 4a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L8 7.438V14c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7.438l-2.312 2.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l4-4a.964.964 0 0 1 1.407 0M2 15v2c0 .563.438 1 1 1h8c.531 0 1-.437 1-1v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='e5205f3ad7bc15cc4dfc54c2823bb5e6__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdFillIcon);
export default ForwardRef;
