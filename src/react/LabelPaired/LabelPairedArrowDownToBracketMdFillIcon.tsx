import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketMdFillIcon = (
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
      <path d='m11.688 10.719-4 4a.964.964 0 0 1-1.407 0l-4-4a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.406 0L6 11.593V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v6.594l2.281-2.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406M2 15v2c0 .563.438 1 1 1h8c.531 0 1-.437 1-1v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='caa2f375e7fad32feeac158a729afa1c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketMdFillIcon);
export default ForwardRef;
