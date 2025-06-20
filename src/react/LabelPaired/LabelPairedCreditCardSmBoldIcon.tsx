import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardSmBoldIcon = (
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
      <path d='M14.125 5.938H1.875a.45.45 0 0 0-.437.437v.875h13.125v-.875a.47.47 0 0 0-.438-.437m.438 3.937H1.438v5.25c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438zM1.874 4.625h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m1.531 8.313H4.72c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.406a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656m3.5 0H9.97c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.906a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='92a06c3826bc089da43d5e63c6d61f1f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardSmBoldIcon);
export default ForwardRef;
