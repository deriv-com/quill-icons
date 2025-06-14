import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoSmBoldIcon = (
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
      <path d='M1.875 6.813a.45.45 0 0 0-.437.437v7c0 .246.19.438.437.438h7a.45.45 0 0 0 .438-.438v-7a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75h-7c-.984 0-1.75-.766-1.75-1.75zm14.438 6.453V7.824L11.5 9.191V7.77l2.844-1.286c.136-.054.273-.109.437-.109.602 0 1.094.492 1.094 1.094v6.59c0 .601-.492 1.066-1.094 1.066-.164 0-.3-.027-.437-.082L11.5 13.758v-1.45z' />
    </g>
    <defs>
      <clipPath id='fa19fc0d4244453f9b1130fc24a0e39f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmBoldIcon);
export default ForwardRef;
