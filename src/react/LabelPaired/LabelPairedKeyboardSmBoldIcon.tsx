import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardSmBoldIcon = (
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
      <path d='M1.875 6.813a.45.45 0 0 0-.437.437v7c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438v-7a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm4.813 5.25h6.125a.47.47 0 0 1 .437.438v.437a.45.45 0 0 1-.437.438H4.937a.43.43 0 0 1-.437-.438v-.437a.45.45 0 0 1 .438-.438m-1.97-1.969a.45.45 0 0 1 .438-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.438-2.625h.438a.47.47 0 0 1 .437.438v.437a.45.45 0 0 1-.437.438h-.438a.43.43 0 0 1-.437-.438v-.437a.45.45 0 0 1 .437-.438m1.75 2.625a.45.45 0 0 1 .438-.437h.437a.47.47 0 0 1 .438.437v.438a.45.45 0 0 1-.438.437h-.437a.43.43 0 0 1-.438-.437zm.438-2.625h.437a.47.47 0 0 1 .438.438v.437a.45.45 0 0 1-.438.438h-.437a.43.43 0 0 1-.438-.438v-.437a.45.45 0 0 1 .438-.438m1.75 2.625a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H7.78a.43.43 0 0 1-.437-.437zm.437-2.625h.438a.47.47 0 0 1 .437.438v.437a.45.45 0 0 1-.437.438H7.78a.43.43 0 0 1-.437-.438v-.437a.45.45 0 0 1 .437-.438m1.75 2.625a.45.45 0 0 1 .438-.437h.437a.47.47 0 0 1 .438.437v.438a.45.45 0 0 1-.438.437H9.97a.43.43 0 0 1-.438-.437zm.438-2.625h.437a.47.47 0 0 1 .438.438v.437a.45.45 0 0 1-.438.438H9.97a.43.43 0 0 1-.438-.438v-.437a.45.45 0 0 1 .438-.438m1.75 2.625a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437-2.625h.438a.47.47 0 0 1 .437.438v.437a.45.45 0 0 1-.437.438h-.438a.43.43 0 0 1-.437-.438v-.437a.45.45 0 0 1 .437-.438' />
    </g>
    <defs>
      <clipPath id='74a977bb185d9896986839f8a52ee447__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardSmBoldIcon);
export default ForwardRef;
