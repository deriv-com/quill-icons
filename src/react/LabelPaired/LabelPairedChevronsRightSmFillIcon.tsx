import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightSmFillIcon = (
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
      <path d='m12.852 11.379-5.25 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.649-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l5.25 5.25a.843.843 0 0 1 0 1.23m-10.5 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.649-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l5.25 5.25a.843.843 0 0 1 0 1.23z' />
    </g>
    <defs>
      <clipPath id='ee1b038f71e44b412ef3aff230a82801__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmFillIcon);
export default ForwardRef;
