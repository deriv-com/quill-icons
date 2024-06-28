import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterSmRegularIcon = (
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
      <path d='M7.438 4.625h-5.25a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h5.25a.45.45 0 0 0 .437-.437v-.875a.47.47 0 0 0-.437-.438m-5.25-.875h5.25c.71 0 1.312.602 1.312 1.313v.875c0 .738-.602 1.312-1.312 1.312H5.25v.875h6.344a1.74 1.74 0 0 1 1.722 1.504l.657 4.512c0 .082.027.164.027.246V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16v-1.859l.656-4.512A1.74 1.74 0 0 1 2.38 8.125h1.996V7.25H2.188A1.296 1.296 0 0 1 .875 5.938v-.875c0-.711.574-1.313 1.313-1.313M.875 16c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875v-.875H.875zm11.594-6.234C12.387 9.328 12.03 9 11.594 9H2.379c-.438 0-.793.328-.875.766L.875 14.25h12.223zm-9.406.328c.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656c0-.355.274-.656.656-.656m1.968.656c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.657-.656.355 0 .656.3.656.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656M7 12.281c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657m3.281-1.531c0-.355.274-.656.656-.656.356 0 .657.3.657.656 0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656m-.656 1.531c.355 0 .656.301.656.656 0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='4aedd9586c4f2ea1bff0454512df8d80__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmRegularIcon);
export default ForwardRef;
