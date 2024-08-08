import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m.137-9.625c.11 0 .218.027.3.082l.848.328a.645.645 0 0 0 .848-.383.654.654 0 0 0-.356-.847l-.847-.328a2 2 0 0 0-.793-.165c-1.176 0-2.133.985-2.133 2.16v.903h-.191a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h.19v.3c0 .438-.081.903-.3 1.313l-.273.492a.7.7 0 0 0 .027.657c.11.191.328.3.574.3H8.97a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656H6.07q.246-.697.246-1.477v-.273h1.122a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H6.316v-.902c0-.465.356-.848.82-.848' />
    </g>
    <defs>
      <clipPath id='523e63976f887b87ed1b24dffd6bfa12__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingSmFillIcon);
export default ForwardRef;
