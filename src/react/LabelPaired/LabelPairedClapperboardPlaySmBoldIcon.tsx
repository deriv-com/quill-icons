import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlaySmBoldIcon = (
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
      <path d='M1.313 15.125c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438V9.438H1.313zm7.875-7h1.75l1.75-1.75a.47.47 0 0 0-.438-.437h-.875zm-2.626 0L8.75 5.938H7L4.813 8.124zm-4.374 0 2.187-2.187h-1.75L1.313 7.25v.875zM14 6.375v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75m-8.094 3.992c.137-.055.328-.055.438.027l2.625 1.75a.43.43 0 0 1 .219.356c0 .164-.083.3-.22.383l-2.624 1.75c-.11.082-.301.082-.438.027a.48.48 0 0 1-.218-.41v-3.5c0-.137.082-.3.218-.383' />
    </g>
    <defs>
      <clipPath id='52b0fdc15c383db7e28adafc7cb1e676__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlaySmBoldIcon);
export default ForwardRef;
