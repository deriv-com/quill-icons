import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopSmBoldIcon = (
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
      <path d='M14.25 5.938H3.75a.45.45 0 0 0-.437.437V12.5H2V6.375c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75V12.5h-1.312V6.375a.47.47 0 0 0-.438-.437M2.875 15.563h12.25c.547 0 1.04-.356 1.23-.876H1.617c.192.52.684.876 1.258.876M.25 14.25c0-.465.383-.875.875-.875h15.75a.9.9 0 0 1 .875.875 2.626 2.626 0 0 1-2.625 2.625H2.875A2.626 2.626 0 0 1 .25 14.25' />
    </g>
    <defs>
      <clipPath id='16f9613313ad7bc97e1eb943484229c7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmBoldIcon);
export default ForwardRef;
