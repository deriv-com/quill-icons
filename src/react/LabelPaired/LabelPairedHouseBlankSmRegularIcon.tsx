import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankSmRegularIcon = (
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
      <path d='M7.7 3.86a.45.45 0 0 1 .573 0l7.438 6.562c.191.164.191.437.055.629-.164.191-.438.191-.63.027l-1.011-.902v5.387c0 1.23-.984 2.187-2.187 2.187H4.061a2.16 2.16 0 0 1-2.187-2.187v-5.387l-1.04.902c-.163.164-.464.164-.6-.027-.165-.192-.165-.465.027-.63zM2.75 9.41v6.153c0 .738.574 1.312 1.313 1.312h7.875c.71 0 1.312-.574 1.312-1.312V9.41L8 4.79z' />
    </g>
    <defs>
      <clipPath id='cb72b84df56e1d08ac7ac7ffc2d10e87__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmRegularIcon);
export default ForwardRef;
