import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownSmBoldIcon = (
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
      <path d='M1.563 16c0 .246.19.438.437.438h7A.45.45 0 0 0 9.438 16V8.125H7.25a.864.864 0 0 1-.875-.875V5.063H2a.45.45 0 0 0-.437.437zM2 3.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m4.156 6.344v2.816l.848-.848c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903l-1.97 1.969c-.273.273-.683.273-.929 0l-1.969-1.97a.6.6 0 0 1 0-.902c.247-.273.657-.273.93 0l.848.848v-2.816c0-.356.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='39020d5278ede3492a03c773d3ce6743__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownSmBoldIcon);
export default ForwardRef;
