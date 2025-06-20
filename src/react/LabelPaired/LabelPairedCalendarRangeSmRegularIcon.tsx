import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeSmRegularIcon = (
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
      <path d='M3.438 3.75a.47.47 0 0 1 .437.438V5.5h5.25V4.188a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V5.5h.875c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V7.25c0-.957.766-1.75 1.75-1.75H3V4.188a.45.45 0 0 1 .438-.438M11.75 9H1.25v7c0 .492.383.875.875.875h8.75A.88.88 0 0 0 11.75 16zm-.875-2.625h-8.75a.88.88 0 0 0-.875.875v.875h10.5V7.25a.9.9 0 0 0-.875-.875m0 4.813a.45.45 0 0 1-.437.437H6.062a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438h4.375a.47.47 0 0 1 .437.438m-3.937 3.937H2.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h4.374a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437M3 11.188c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438m.438 1.312a1.31 1.31 0 0 1-1.149-.656c-.246-.383-.246-.903 0-1.313.246-.383.656-.656 1.148-.656.465 0 .876.273 1.122.656.246.41.246.93 0 1.313-.247.41-.657.656-1.122.656m6.124 2.625a.45.45 0 0 0 .438-.437.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438c0 .246.191.437.438.437m1.313-.437c0 .492-.273.902-.656 1.148-.41.246-.93.246-1.313 0a1.31 1.31 0 0 1-.656-1.149c0-.464.246-.874.656-1.12.383-.247.903-.247 1.313 0 .383.245.656.656.656 1.12' />
    </g>
    <defs>
      <clipPath id='bedff37f4d50065d0da239fc08dc1b56__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeSmRegularIcon);
export default ForwardRef;
