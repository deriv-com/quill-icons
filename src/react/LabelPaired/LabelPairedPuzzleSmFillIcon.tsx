import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleSmFillIcon = (
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
      <path d='M8.75 3.75h3.5c.957 0 1.75.793 1.75 1.75V9a.45.45 0 0 1-.437.438H12.14a.33.33 0 0 0-.328.328v.109c0 .492-.41.875-.876.875a.864.864 0 0 1-.874-.875v-.11a.35.35 0 0 0-.329-.328H8.75A.43.43 0 0 1 8.313 9v-.875a.45.45 0 0 1 .437-.437h.438a.88.88 0 0 0 .874-.875.9.9 0 0 0-.874-.875H8.75a.43.43 0 0 1-.437-.438V4.188a.45.45 0 0 1 .437-.438m-8.75 7v-3.5C0 6.293.766 5.5 1.75 5.5h3.5a.47.47 0 0 1 .438.438v.984c0 .191.136.328.328.328h.109A.9.9 0 0 1 7 8.125C7 8.617 6.59 9 6.125 9h-.11a.33.33 0 0 0-.327.328v1.422a.45.45 0 0 1-.438.438h-.875a.43.43 0 0 1-.437-.438v-.437a.9.9 0 0 0-.876-.876.88.88 0 0 0-.874.876v.437a.45.45 0 0 1-.438.438H.438A.43.43 0 0 1 0 10.75M0 16v-3.5a.45.45 0 0 1 .438-.437H5.25a.47.47 0 0 1 .438.437v.875a.45.45 0 0 1-.438.438h-.437a.88.88 0 0 0-.875.874c0 .493.382.876.874.876h.438a.47.47 0 0 1 .438.437v1.313a.45.45 0 0 1-.438.437h-3.5C.766 17.75 0 16.984 0 16m6.563-3.5A.45.45 0 0 1 7 12.063h.875a.47.47 0 0 1 .438.437v.438c0 .492.382.874.874.874a.88.88 0 0 0 .876-.874V12.5a.45.45 0 0 1 .437-.437h1.313a.47.47 0 0 1 .437.437V16c0 .984-.793 1.75-1.75 1.75H7a.43.43 0 0 1-.437-.437z' />
    </g>
    <defs>
      <clipPath id='7864f1e0d4dc63479cf902f0cb5fce0f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleSmFillIcon);
export default ForwardRef;
