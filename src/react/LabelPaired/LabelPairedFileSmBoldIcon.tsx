import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileSmBoldIcon = (
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
      <path d='M9 16.438A.45.45 0 0 0 9.438 16V8.125H7.25a.864.864 0 0 1-.875-.875V5.063H2a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438zM.25 5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='1572749213d10dfe6410d51a47971a76__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileSmBoldIcon);
export default ForwardRef;
