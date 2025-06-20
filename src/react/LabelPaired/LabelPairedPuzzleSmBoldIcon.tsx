import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleSmBoldIcon = (
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
      <path d='M12.25 3.75c.957 0 1.75.793 1.75 1.75V9a.45.45 0 0 1-.437.438H12.14a.33.33 0 0 0-.328.328v.109c0 .492-.41.875-.876.875a.864.864 0 0 1-.874-.875v-.11a.35.35 0 0 0-.329-.328H8.75A.43.43 0 0 1 8.313 9v-.875a.45.45 0 0 1 .437-.437h.438a.88.88 0 0 0 .874-.875.9.9 0 0 0-.874-.875H8.75a.43.43 0 0 1-.437-.438V4.188a.45.45 0 0 1 .437-.438zM0 10.313V7.25C0 6.293.766 5.5 1.75 5.5h3.938a.47.47 0 0 1 .437.438v1.421c0 .192.137.329.328.329h.11a.9.9 0 0 1 .875.875c0 .492-.41.874-.875.874h-.11a.33.33 0 0 0-.328.329v1.422a.45.45 0 0 1-.437.437h-.875a.43.43 0 0 1-.438-.437v-.438a.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875v.438a.45.45 0 0 1-.437.437h-.876v4.156c0 .383.274.656.657.656h4.156v-.984a.35.35 0 0 0-.328-.328h-.11a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.11a.33.33 0 0 0 .328-.328v-.985a.45.45 0 0 1 .438-.437h1.312a.47.47 0 0 1 .438.438v.437c0 .492.382.875.874.875a.88.88 0 0 0 .876-.875v-.437a.45.45 0 0 1 .437-.438h1.313a.47.47 0 0 1 .437.438V16c0 .984-.793 1.75-1.75 1.75H1.969A1.96 1.96 0 0 1 0 15.781v-5.468' />
    </g>
    <defs>
      <clipPath id='58f16daa166036fa2c859d2bc55ec574__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleSmBoldIcon);
export default ForwardRef;
