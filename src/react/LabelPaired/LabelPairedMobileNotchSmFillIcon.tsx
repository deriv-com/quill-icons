import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 5.5h-.875a.45.45 0 0 0-.437.438v9.625c0 .246.19.437.437.437h5.25a.45.45 0 0 0 .438-.437V5.938a.47.47 0 0 0-.438-.438H7.25v.438a.45.45 0 0 1-.437.437H4.188a.43.43 0 0 1-.438-.437zm-.875-1.75h5.25c1.203 0 2.188.984 2.188 2.188v9.625c0 1.23-.985 2.187-2.188 2.187h-5.25a2.16 2.16 0 0 1-2.187-2.187V5.938c0-1.204.957-2.188 2.187-2.188m.875 10.938a.45.45 0 0 1 .438-.438h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.188a.43.43 0 0 1-.438-.437' />
    </g>
    <defs>
      <clipPath id='61993d7951cf09a8d41d71ece4c95a66__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmFillIcon);
export default ForwardRef;
