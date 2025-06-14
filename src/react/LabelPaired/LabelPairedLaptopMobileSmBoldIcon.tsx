import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 5.063a.45.45 0 0 0-.437.437v7h6.562v1.75H1.563A1.296 1.296 0 0 1 .25 12.938a.45.45 0 0 1 .438-.438H2v-7c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v.875h-1.312V5.5a.47.47 0 0 0-.438-.437zm7 3.5c0-.711.574-1.313 1.313-1.313h4.374c.711 0 1.313.602 1.313 1.313v7.874c0 .739-.602 1.313-1.312 1.313h-4.375a1.296 1.296 0 0 1-1.313-1.312zm1.313 0v7.874h4.374V8.563z' />
    </g>
    <defs>
      <clipPath id='a213d6abce66afa9510b9ba29f623951__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmBoldIcon);
export default ForwardRef;
