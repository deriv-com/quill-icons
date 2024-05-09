import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 6.75h15c1.367 0 2.5 1.133 2.5 2.5v10H20v-10H5v10H2.5v-10c0-1.367 1.094-2.5 2.5-2.5M.742 20.5H24.22c.43 0 .781.352.781.781 0 1.64-1.367 2.969-3.008 2.969H2.97A2.967 2.967 0 0 1 0 21.281c0-.43.313-.781.742-.781' />
    </g>
    <defs>
      <clipPath id='051a347e2e9844e12e5ebaf60c8edac7__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgFillIcon);
export default ForwardRef;
