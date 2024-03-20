import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterSmBoldIcon = (
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
      <path d='M1.75 3.75h6.125a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875H5.688v.875h5.906a1.74 1.74 0 0 1 1.722 1.504l.657 4.512c0 .082.027.164.027.246V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16v-1.859l.656-4.512A1.74 1.74 0 0 1 2.38 8.125h1.559V7.25H1.75a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875m.875 1.313a.45.45 0 0 0-.437.437c0 .246.19.438.437.438H7a.45.45 0 0 0 .438-.438A.47.47 0 0 0 7 5.063zM1.313 16c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438v-.437H1.313zM12.03 9.82a.44.44 0 0 0-.437-.383H2.379a.44.44 0 0 0-.438.383l-.629 4.43H12.66zm-8.968.274c.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656c0-.355.274-.656.656-.656m1.968.656c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656M7 12.281c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.656-.656.356 0 .657.3.657.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='8a01160322467df75bc8f070ea20907b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmBoldIcon);
export default ForwardRef;
