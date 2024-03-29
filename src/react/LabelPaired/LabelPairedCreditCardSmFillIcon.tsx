import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardSmFillIcon = (
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
      <path d='M1.875 4.625h12.25c.957 0 1.75.793 1.75 1.75v.875H.125v-.875c0-.957.766-1.75 1.75-1.75m14 5.25v5.25c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-5.25zm-12.687 3.5a.45.45 0 0 0-.438.438c0 .246.191.437.438.437h1.75a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438zm3.062.438c0 .246.191.437.438.437h3.5a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438h-3.5a.45.45 0 0 0-.438.438' />
    </g>
    <defs>
      <clipPath id='202ee758c686c4d6c920bfe82981f5cb__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardSmFillIcon);
export default ForwardRef;
