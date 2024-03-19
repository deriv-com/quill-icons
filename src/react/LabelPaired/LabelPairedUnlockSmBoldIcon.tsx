import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockSmBoldIcon = (
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
      <path d='M4.313 7.25V9h6.562c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-5.25c0-.957.766-1.75 1.75-1.75H3V7.25c0-1.914 1.559-3.5 3.5-3.5a3.48 3.48 0 0 1 3.309 2.434.653.653 0 0 1-.41.82.653.653 0 0 1-.82-.41C8.276 5.719 7.456 5.062 6.5 5.062c-1.23 0-2.187.985-2.187 2.188m-2.625 3.5V16c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-5.25a.47.47 0 0 0-.438-.437h-8.75a.45.45 0 0 0-.437.437' />
    </g>
    <defs>
      <clipPath id='44f6fc57eed905e4caab9b4007bf0547__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmBoldIcon);
export default ForwardRef;
