import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckSmFillIcon = (
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
      <path d='M.125 5.5c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v3.691a4.815 4.815 0 0 0-3.5 4.621 4.84 4.84 0 0 0 1.996 3.938H1.875c-.984 0-1.75-.766-1.75-1.75zm1.75 2.188c0 .246.191.437.438.437h6.124a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438H2.311a.45.45 0 0 0-.437.438m.438 2.187a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h4.374a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438zm0 2.625a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438zM8 13.813c0-1.395.738-2.68 1.969-3.391a3.9 3.9 0 0 1 3.937 0c1.203.71 1.969 1.996 1.969 3.39a3.97 3.97 0 0 1-1.969 3.419c-1.23.71-2.734.71-3.937 0A3.92 3.92 0 0 1 8 13.811m5.14-1.176-1.64 1.668-.793-.793a.463.463 0 0 0-.629 0 .463.463 0 0 0 0 .629l1.094 1.093a.463.463 0 0 0 .629 0l1.969-1.968a.463.463 0 0 0 0-.63.463.463 0 0 0-.63 0' />
    </g>
    <defs>
      <clipPath id='1469d19f3eb8316daf15598551c159b3__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmFillIcon);
export default ForwardRef;
