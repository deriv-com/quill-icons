import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarSmBoldIcon = (
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
      <path d='M4.531 4.406V5.5H8.47V4.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656V5.5h1.094c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V7.25c0-.957.766-1.75 1.75-1.75h1.094V4.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656M1.688 9v7c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438V9z' />
    </g>
    <defs>
      <clipPath id='39e3c229a97335539f9b2e2c36375a4e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmBoldIcon);
export default ForwardRef;
